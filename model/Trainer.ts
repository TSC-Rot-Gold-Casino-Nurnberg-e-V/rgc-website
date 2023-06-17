import { z } from "zod";

export const trainerSchema = z.object({
  id: z.number(),
  attributes: z.object({
    name: z.string(),
    description: z.string().nullable(),
    licence: z.string(),
    image: z.object({
      data: z.object({
        attributes: z.object({
          url: z.string(),
        }),
      }),
    }),
  }),
});

export type Trainer = z.infer<typeof trainerSchema>;
