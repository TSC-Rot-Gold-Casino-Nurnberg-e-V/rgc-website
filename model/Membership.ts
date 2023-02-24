import { z } from "zod";

export const membershipShema = z.object({
  id: z.number(),
  attributes: z.object({
    title: z.string(),
    document: z.object({
      data: z.object({
        attributes: z.object({
          url: z.string(),
        }),
      }),
    }),
  }),
});

export const membershipsShema = z.array(membershipShema);

export type Membership = z.infer<typeof membershipShema>;
