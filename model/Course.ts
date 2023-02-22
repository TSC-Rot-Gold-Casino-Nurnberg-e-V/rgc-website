import { z } from "zod";
import { trainersSchema } from "./Trainer";

export const courseSchema = z.object({
  id: z.number(),
  attributes: z.object({
    title: z.string(),
    description: z.string(),
    previewImage: z.object({
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
    trainers: trainersSchema,
  }),
});

export const coursesSchema = z.array(courseSchema);

export type Course = z.infer<typeof courseSchema>;
