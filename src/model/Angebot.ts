import { z } from "zod";
import { trainerSchema } from "./Trainer";
import { trainingSchema } from "./Training";
import { faqSchema } from "./FAQ";

export const angebotSchema = z
  .object({
    id: z.number(),
    attributes: z.object({
      slug: z.string(),
      titel: z.string(),
      beschreibung: z.string(),
      trainers: z
        .object({
          data: z.array(trainerSchema),
        })
        .transform(({ data }) => data),
      trainings: z
        .object({
          data: z.array(trainingSchema),
        })
        .transform(({ data }) => data),
      faqs: z
        .object({
          data: z.array(faqSchema),
        })
        .transform(({ data }) => data),
    }),
  })
  .transform(({ id, attributes }) => ({ id, ...attributes }));

export type Angebot = z.infer<typeof angebotSchema>;
