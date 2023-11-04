import { z } from "zod";
import { personSchema } from "./Person";

export const vorstandsmitgliedSchema = z
  .object({
    id: z.number(),
    attributes: z.object({
      rolle: z.string(),
      telefonnummer: z.string().nullable(),
      email: z.string(),
      person: z
        .object({
          data: personSchema,
        })
        .transform(({ data }) => data),
    }),
  })
  .transform(({ id, attributes }) => ({ id, ...attributes }));

export const vorstandsmitgliederSchema = z.array(vorstandsmitgliedSchema);

export type Vorstandsmitglied = z.infer<typeof vorstandsmitgliedSchema>;
