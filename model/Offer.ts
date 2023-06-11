import { z } from "zod";
import { trainersSchema } from "./Trainer";

export const offerSchema = z.object({
  id: z.number(),
  attributes: z.object({
    title: z.string(),
    description: z.string(),
    previewImage: z.object({
      data: z.object({
        attributes: z.object({
          formats: z.object({
            small: z.optional(
              z.object({
                url: z.string(),
              })
            ),
          }),
          url: z.string(),
        }),
      }),
    }),
    trainers: trainersSchema,
  }),
});

export const offersSchema = z.array(offerSchema);

export type Offer = z.infer<typeof offerSchema>;
