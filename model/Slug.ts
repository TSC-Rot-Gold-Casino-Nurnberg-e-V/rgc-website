import { z } from "zod";

export const slugSchema = z.object({
  attributes: z.object({
    slug: z.string(),
  }),
});

export const slugsSchema = z.array(slugSchema);
