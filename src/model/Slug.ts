import { z } from "zod";

export const slugSchema = z
  .object({
    attributes: z.object({
      slug: z.string(),
    }),
  })
  .transform(({ attributes }) => attributes.slug);

export const slugsSchema = z.array(slugSchema);

export type Slug = z.infer<typeof slugSchema>;
