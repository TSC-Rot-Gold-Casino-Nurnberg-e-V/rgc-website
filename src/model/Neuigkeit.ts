import { z } from "zod";
import { addHours } from "date-fns";

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
              height: z.number().optional(),
              width: z.number().optional(),
            }),
          }),
        })
        .transform(({ data }) => ({ ...data.attributes })),
    }),
  })
  .transform(({ id, attributes }) => ({
    id,
    ...attributes,
    datum: fixTimezone(attributes.datum),
  }));

export const neuigkeitenSchema = z.array(neuigkeitSchema);

export type Neuigkeit = z.infer<typeof neuigkeitSchema>;

function fixTimezone(dateString: string): string {
  return addHours(new Date(dateString), 2).toISOString();
}
