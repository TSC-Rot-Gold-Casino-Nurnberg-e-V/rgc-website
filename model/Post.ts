import { z } from "zod";

export const postSchema = z.object({
  id: z.number(),
  attributes: z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    previewText: z.string(),
    chronologicalPosition: z.string(),
    mainImage: z.object({
      data: z.object({
        attributes: z.object({
          formats: z.object({
            small: z.optional(
              z.object({
                url: z.string(),
              })
            ),
          }),
          url: z.string(),
        }),
      }),
    }),
  }),
});

export const postsSchema = z.array(postSchema);

export type Post = z.infer<typeof postSchema>;
