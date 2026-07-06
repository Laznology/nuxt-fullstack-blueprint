import { z } from "zod";

export const userSchema = z.object({
  createdAt: z.date(),
  email: z.string().email(),
  id: z.string().uuid(),
  name: z.string().min(2),
});

export type User = z.infer<typeof userSchema>;
