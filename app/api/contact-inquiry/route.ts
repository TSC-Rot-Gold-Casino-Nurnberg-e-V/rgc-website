import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import ContactInquiryConfirmationEmail from "../../../emails/ContactInquiryConfirmationEmail";
import { createTransport } from "nodemailer";
import { render } from "@react-email/render";

// TODO: replace with test email address (env variable?)
const RGC_MAIL_ADDRESS = '"RGC TEST 👻" <foo@example.com>';

const transporter = createTransport({
  host: "smtp.strato.de", // TODO: use strato smtp server host
  port: 465, // TODO: use strato smtp server port
  secure: true,
  // TODO: configure auth (user & pass OR accessToken)
  auth: {
    user: "REPLACE",
    pass: "REPLACE",
    accessToken: "REPLACE",
  },
});

const contactInquiryConfirmationEmailHTML = render(
  ContactInquiryConfirmationEmail()
);

const contactInquirySchema = z.object({
  email: z.string().email(),
  message: z.string(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const contactInquiry = contactInquirySchema.parse(body);

  console.info("Received contact inquiry: ", contactInquiry);

  try {
    // TODO: macht es überhaupt Sinn, eine separate Confirmation-Email zu verschicken?
    //  Sollte vielleicht einfach der Absender in CC genommen werden bei der Mail an info@rgc?
    await transporter.sendMail({
      from: RGC_MAIL_ADDRESS,
      to: contactInquiry.email,
      subject: "Kontaktanfrage TSC Rot-Gold-Casino Nürnberg e.V.",
      html: contactInquiryConfirmationEmailHTML,
    });

    await transporter.sendMail({
      from: RGC_MAIL_ADDRESS,
      to: RGC_MAIL_ADDRESS,
      subject: "Kontaktanfrage TSC Rot-Gold-Casino Nürnberg e.V.",
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
