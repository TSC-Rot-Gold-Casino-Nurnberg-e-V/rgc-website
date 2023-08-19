import { z } from "zod";

export const neuigkeitSchema = z
  .object({
    id: z.number(),
    attributes: z.object({
      slug: z.string(),
      titel: z.string(),
      beschreibung: z.string(),
      vorschautext: z.string(),
      datum: z.string(),
      vorschaubild: z
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

export const neuigkeitenSchema = z.array(neuigkeitSchema);

export type Neuigkeit = z.infer<typeof neuigkeitSchema>;
