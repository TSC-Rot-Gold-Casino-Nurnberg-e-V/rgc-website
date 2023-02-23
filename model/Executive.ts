import { z } from "zod";

export const executiveSchema = z.object({
  id: z.number(),
  attributes: z.object({
    position: z.string(),
    name: z.string(),
    phone: z.string(),
    email: z.string(),
    image: z.object({
      data: z.object({
        attributes: z.object({
          url: z.string(),
        }),
      }),
    }),
  }),
});

export const executivesSchema = z.array(executiveSchema);

export type Executive = z.infer<typeof executiveSchema>;
