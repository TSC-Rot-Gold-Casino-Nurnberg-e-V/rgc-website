import { z } from "zod";

export const faqSchema = z.object({
  id: z.number(),
  attributes: z.object({
    frage: z.string(),
    antwort: z.string(),
  }),
});

export type FAQ = z.infer<typeof faqSchema>;
