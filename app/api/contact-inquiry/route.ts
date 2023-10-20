import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import ContactInquiryConfirmationEmail from "../../../emails/ContactInquiryConfirmationEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactInquirySchema = z.object({
  email: z.string().email(),
  message: z.string(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const contactInquiry = contactInquirySchema.parse(body);

  console.log("contactInquiry: ", contactInquiry);

  try {
    const response = await resend.emails.send({
      from: "RGC TEST <onboarding@resend.dev>",
      to: contactInquiry.email,
      subject: "Kontaktanfrage TSC Rot-Gold-Casino Nürnberg e.V.",
      react: ContactInquiryConfirmationEmail(),
    });

    console.log("response: ", response);

    // TODO: contact-inquiry content of contact inquiry to info@rot-gold-casino.de?

    return NextResponse.json({
      message: "Inquiry successfully processed",
    });
  } catch (error) {
    console.error("error: ", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
