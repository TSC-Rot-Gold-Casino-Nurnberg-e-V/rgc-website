import { z } from "zod";

export const faqSchema = z.object({
  id: z.number(),
  attributes: z.object({
    question: z.string(),
    answer: z.string(),
  }),
});
export type FAQ = z.infer<typeof faqSchema>;
