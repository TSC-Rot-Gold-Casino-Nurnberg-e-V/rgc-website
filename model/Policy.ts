import { z } from "zod";

export const privacyPolicySchema = z.object({
  id: z.number(),
  attributes: z.object({
    privacyPolicy: z.string(),
  }),
});

export type Policy = z.infer<typeof privacyPolicySchema>;
