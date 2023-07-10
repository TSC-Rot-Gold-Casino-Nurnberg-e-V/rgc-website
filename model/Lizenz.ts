import { z } from "zod";

export const lizenzSchema = z.object({
  id: z.number(),
  attributes: z.object({
    name: z.string(),
  }),
});

export type Lizenz = z.infer<typeof lizenzSchema>;
