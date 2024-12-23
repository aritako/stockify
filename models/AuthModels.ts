import { z, ZodType } from 'zod';

export const LoginFormSchema = z.object({
  email: z.string().nonempty("Email is required.").email("Invalid email address."),
  password: z.string().nonempty("Password is required.")
});

export const SignUpFormSchema = z.object({
  username: z.string().nonempty("Username is required."),
  email: z.string().nonempty("Email is required.").email("Invalid email address."),
  password: z
    .string()
    .nonempty("Password is required.")
    .min(6, "Password must be at least 6 characters long.")
})

export type LoginForm = z.infer<typeof LoginFormSchema>;
export type SignUpForm = z.infer<typeof SignUpFormSchema>;