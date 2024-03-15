import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import ContactInquiryConfirmationEmail from "../../../emails/ContactInquiryConfirmationEmail";
import { createTransport } from "nodemailer";
import { render } from "@react-email/render";
import sanitize from "sanitize-html";
import { validateRecaptchaToken } from "./validateRecaptchaToken";

const RGC_EMAIL = process.env.RGC_EMAIL ?? "";

if (!RGC_EMAIL) {
  console.error("env variable RGC_EMAIL not set");
}

const transporter = createTransport({
  host: "smtp.strato.de",
  port: 465,
  secure: true,
  auth: {
    user: process.env.RGC_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

const contactInquiryConfirmationEmailHTML = render(
  ContactInquiryConfirmationEmail(),
);

const contactInquirySchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    subject: z.string(),
    message: z.string(),
    recaptchaToken: z.string(),
  })
  .transform((data) => ({
    email: sanitize(data.email),
    name: sanitize(data.name),
    subject: sanitize(data.subject),
    message: sanitize(data.message),
    recaptchaToken: data.recaptchaToken,
  }));

export type ContactInquiry = z.infer<typeof contactInquirySchema>;

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { recaptchaToken, ...contactInquiry } =
    contactInquirySchema.parse(body);

  console.info("Received contact inquiry: ", contactInquiry);

  try {
    const isHuman = await validateRecaptchaToken(recaptchaToken);

    if (!isHuman) {
      return NextResponse.json(
        { error: "Recaptcha validation failed" },
        { status: 403 },
      );
    }

    await transporter.sendMail({
      from: {
        name: "TSC Rot-Gold-Casino Nürnberg e.V.",
        address: RGC_EMAIL,
      },
      to: contactInquiry.email,
      subject: "Kontaktanfrage TSC Rot-Gold-Casino Nürnberg e.V.",
      html: contactInquiryConfirmationEmailHTML,
    });

    console.info(
      "Successfully sent contact inquiry confirmation email to: ",
      contactInquiry.email,
    );

    console.info("Sending contact inquiry email to: ", RGC_EMAIL);

    await transporter.sendMail({
      from: RGC_EMAIL,
      to: RGC_EMAIL,
      subject: "Kontaktanfrage: " + contactInquiry.subject,
      text: `Name: ${contactInquiry.name}\nE-Mail: ${contactInquiry.email}\nBetreff: ${contactInquiry.subject}\n\nNachricht:\n${contactInquiry.message}`,
    });

    console.info("Successfully sent contact inquiry to: ", RGC_EMAIL);

    return NextResponse.json({
      message: "Inquiry successfully processed",
    });
  } catch (error) {
    console.error("error: ", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
