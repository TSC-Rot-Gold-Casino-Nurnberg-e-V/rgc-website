import { z } from "zod";

export const trainerSchema = z.object({
  id: z.number(),
  attributes: z.object({
    name: z.string(),
    description: z.string().nullable(),
    licence: z.string(),
    image: z.optional(
      z.object({
        data: z.nullable(
          z.object({
            attributes: z.object({
              url: z.string(),
            }),
          })
        ),
      })
    ),
  }),
});

export const trainersSchema = z.object({ data: z.array(trainerSchema) });

export type Trainer = z.infer<typeof trainerSchema>;
