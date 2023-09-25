import { z } from "zod";

export const personSchema = z
  .object({
    id: z.number(),
    attributes: z.object({
      vorname: z.string(),
      nachname: z.string(),
      bild: z
        .object({
          data: z.object({
            attributes: z.object({
              url: z.string(),
            }),
          }),
        })
        .transform(({ data }) => ({ ...data.attributes })),
    }),
  })
  .transform(({ id, attributes }) => ({ id, ...attributes }));

export type Person = z.infer<typeof personSchema>;
