import { z } from "zod";

export type History = z.infer<typeof historySchema>;

export const historySchema = z.object({
  id: z.number(),
  attributes: z.object({
    content: z.string(),
  }),
});
