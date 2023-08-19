import { z } from "zod";

export const faqSchema = z
  .object({
    id: z.number(),
    attributes: z.object({
      frage: z.string(),
      antwort: z.string(),
    }),
  })
  .transform(({ id, attributes }) => ({ id, ...attributes }));

export type FAQ = z.infer<typeof faqSchema>;
