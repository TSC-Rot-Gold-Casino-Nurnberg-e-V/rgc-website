import { z } from "zod";
import { lizenzSchema } from "./Lizenz";
import { personSchema } from "./Person";

export const trainerSchema = z
  .object({
    id: z.number(),
    attributes: z.object({
      beschreibung: z.string(),
      lizenzen: z
        .object({
          data: z.array(lizenzSchema),
        })
        .transform(({ data }) => data),
      person: z
        .object({
          data: personSchema,
        })
        .transform(({ data }) => data),
    }),
  })
  .transform(({ id, attributes }) => ({ id, ...attributes }));

export type Trainer = z.infer<typeof trainerSchema>;
