import { z } from "zod";
import { lizenzSchema } from "./Lizenz";

export const trainerSchema = z.object({
  id: z.number(),
  attributes: z.object({
    name: z.string(),
    beschreibung: z.string(),
    lizenzen: z.object({
      data: z.array(lizenzSchema),
    }),
    bild: z.object({
      data: z.object({
        attributes: z.object({
          url: z.string(),
        }),
      }),
    }),
  }),
});

export type Trainer = z.infer<typeof trainerSchema>;
