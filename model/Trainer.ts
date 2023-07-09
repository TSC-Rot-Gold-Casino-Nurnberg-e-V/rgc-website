import { z } from "zod";
import { lizenzSchema } from "./Lizenz";

export const trainerSchema = z.object({
  id: z.number(),
  attributes: z.object({
    name: z.string(),
    description: z.string(),
    licence: z.string(),
    lizenzen: z.object({
      data: z.array(lizenzSchema),
    }),
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
