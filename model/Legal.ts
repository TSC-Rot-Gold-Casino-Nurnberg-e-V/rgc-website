import { z } from "zod";

export const legalNoticeSchema = z.object({
  id: z.number(),
  attributes: z.object({
    legalNotice: z.string(),
  }),
});

export type Legal = z.infer<typeof legalNoticeSchema>;
