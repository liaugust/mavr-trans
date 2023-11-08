import { z } from "zod";

export const userSchema = z
  .object({
    phoneNumber: z.string().min(1),
    lastName: z.string().min(1),
    firstName: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(1),
    confirmPassword: z.string().min(1),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type UserSchema = z.infer<typeof userSchema>;
