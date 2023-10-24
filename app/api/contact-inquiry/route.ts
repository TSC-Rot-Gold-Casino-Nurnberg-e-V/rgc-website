import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import ContactInquiryConfirmationEmail from "../../../emails/ContactInquiryConfirmationEmail";
import { createTransport } from "nodemailer";
import { render } from "@react-email/render";
import sanitize from "sanitize-html";

const RGC_EMAIL = process.env.RGC_EMAIL;

const transporter = createTransport({
  host: "smtp.strato.de",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

const contactInquiryConfirmationEmailHTML = render(
  ContactInquiryConfirmationEmail()
);

const contactInquirySchema = z
  .object({
    email: z.string().email(),
    subject: z.string().optional(),
    message: z.string(),
  })
  .transform((data) => ({
    ...data,
    subject: data.subject ? sanitize(data.subject) : undefined,
    message: sanitize(data.message),
  }));

export async function POST(request: NextRequest) {
  const body = await request.json();
  const contactInquiry = contactInquirySchema.parse(body);

  console.info("Received contact inquiry: ", contactInquiry);

  try {
    // TODO: macht es überhaupt Sinn, eine separate Confirmation-Email zu verschicken?
    //  Sollte vielleicht einfach der Absender in CC genommen werden bei der Mail an info@rgc?

    console.info(
      "Sending contact inquiry confirmation email to: ",
      contactInquiry.email
    );
    console.info("from RGC_EMAIL: ", RGC_EMAIL);

    await transporter.sendMail({
      from: RGC_EMAIL,
      to: contactInquiry.email,
      subject: "Kontaktanfrage TSC Rot-Gold-Casino Nürnberg e.V.",
      html: contactInquiryConfirmationEmailHTML,
    });

    console.info(
      "Successfully sent contact inquiry confirmation email to: ",
      contactInquiry.email
    );

    console.info("Sending contact inquiry email to: ", RGC_EMAIL);

    await transporter.sendMail({
      from: RGC_EMAIL,
      to: RGC_EMAIL,
      subject: contactInquiry.subject ?? "Kontaktanfrage",
      text: contactInquiry.message,
    });

    console.info(
      "Successfully sent contact inquiry confirmation email to: ",
      contactInquiry.email
    );

    return NextResponse.json({
      message: "Inquiry successfully processed",
    });
  } catch (error) {
    console.error("error: ", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}