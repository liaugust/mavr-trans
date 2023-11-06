import { z } from "zod";

export const changePasswordSchema = z
  .object({
    prevPassword: z.string().min(8),
    newPassword: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.newPassword !== data.prevPassword, {
    message: "New password should be different from previous password",
    path: ["newPassword"],
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type ChangePasswordSchema = z.infer<typeof changePasswordSchema>;
