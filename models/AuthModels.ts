import { z, ZodType } from 'zod';

export const LoginFormSchema = z.object({
  email: z.string().email("Invalid email address."),
  password: z.string()
});

export type LoginForm = z.infer<typeof LoginFormSchema>;