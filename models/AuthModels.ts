import { z, ZodType } from 'zod';

export const LoginFormSchema = z.object({
  email: z.string().nonempty("Email is required.").email("Invalid email address."),
  password: z.string().nonempty("Password is required.")
});

export type LoginForm = z.infer<typeof LoginFormSchema>;