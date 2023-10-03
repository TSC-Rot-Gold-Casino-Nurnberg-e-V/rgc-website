import { z } from "zod";
import { trainerSchema } from "./Trainer";
import { personSchema } from "./Person";
import { choreoSchema } from "./Choreo";

export const teamSchema = z
  .object({
    id: z.number(),
    attributes: z.object({
      titel: z.string(),
      trainers: z
        .object({
          data: z.array(trainerSchema),
        })
        .transform(({ data }) => data),
      kapitaene: z
        .object({
          data: z.array(personSchema),
        })
        .transform(({ data }) => data),
      choreo: z
        .object({
          data: choreoSchema,
        })
        .transform(({ data }) => data),
      liga: z
        .object({
          data: choreoSchema,
        })
        .transform(({ data }) => data),
    }),
  })
  .transform(({ id, attributes }) => ({ id, ...attributes }));

export type Team = z.infer<typeof teamSchema>;
