import { z } from "zod";

export const historySchema = z.object({
  id: z.number(),
  attributes: z.object({
    content: z.string(),
  }),
});

export type History = z.infer<typeof historySchema>;
