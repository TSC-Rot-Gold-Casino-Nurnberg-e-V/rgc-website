import { z } from "zod";

export const personSchema = z
  .object({
    id: z.number(),
    attributes: z.object({
      vorname: z.string(),
      nachname: z.string().nullable(),
      bild: z
        .object({
          data: z
            .object({
              attributes: z.object({
                url: z.string(),
              }),
            })
            .nullable(),
        })
        .transform(({ data }) => (data ? { ...data.attributes } : null)),
    }),
  })
  .transform(({ id, attributes }) => ({ id, ...attributes }));

export type Person = z.infer<typeof personSchema>;
