import { z } from "zod";

export const vereinsgeschichteSchema = z.object({
  id: z.number(),
  attributes: z.object({
    inhalt: z.string(),
  }),
});

export type Vereinsgeschichte = z.infer<typeof vereinsgeschichteSchema>;
