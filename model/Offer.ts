import { z } from "zod";
import { trainerSchema } from "./Trainer";
import { trainingSchema } from "./Training";
import { faqSchema } from "./FAQ";

export const offerSchema = z.object({
  id: z.number(),
  attributes: z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    trainers: z.object({
      data: z.array(trainerSchema),
    }),
    trainings: z.object({
      data: z.array(trainingSchema),
    }),
    faqs: z.object({
      data: z.array(faqSchema),
    }),
  }),
});

export type Offer = z.infer<typeof offerSchema>;
