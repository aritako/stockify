import { z, ZodType } from 'zod';

export const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string()
});

export type LoginForm = z.infer<typeof LoginFormSchema>;