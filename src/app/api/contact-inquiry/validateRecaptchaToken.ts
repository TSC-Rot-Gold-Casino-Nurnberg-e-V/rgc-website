import { z } from "zod";

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY ?? "";
const RECAPTCHA_URL = "https://www.google.com/recaptcha/api/siteverify";

if (!RECAPTCHA_SECRET_KEY) {
  console.error("RECAPTCHA_SECRET_KEY is not set");
}

const validationResponseSchema = z.object({
  success: z.boolean(),
  score: z.number().optional(),
});

export async function validateRecaptchaToken(token: string) {
  const urlSearchParams = new URLSearchParams({
    secret: RECAPTCHA_SECRET_KEY,
    response: token,
  }).toString();

  const response = await fetch(`${RECAPTCHA_URL}?${urlSearchParams}`, {
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Failed to validate recaptcha token");
  }

  const data = await response.json();
  const { success, score } = validationResponseSchema.parse(data);

  if (!success || score === undefined) {
    throw new Error("Invalid recaptcha token");
  }

  console.info("Recaptcha validation successful with score: ", score);

  return score > 0.5;
}
