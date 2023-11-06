import { FC } from "react";
import { AuthModal, AuthModalProps } from "../AuthModal";
import { FormField } from "../FormField";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ChangePasswordSchema,
  changePasswordSchema,
} from "./change-password-schema";
import { resetPassword } from "@/app/_state/users";

interface ChangePasswordModalProps
  extends Omit<
    AuthModalProps,
    "title" | "buttonText" | "onSubmit" | "submitButtonDisabled"
  > {
  onSuccess: () => void;
}

export const ChangePasswordModal: FC<ChangePasswordModalProps> = ({
  onClose,
}) => {
  const { control, formState, handleSubmit } = useForm<ChangePasswordSchema>({
    defaultValues: {
      newPassword: "",
      prevPassword: "",
      confirmPassword: "",
    },
    resolver: zodResolver(changePasswordSchema),
    mode: "onBlur",
  });
  const { isDirty, isLoading, isValid, isSubmitting, isValidating } = formState;

  const onSubmit = handleSubmit(async (values: ChangePasswordSchema) => {
    await resetPassword(values);
  });

  const isFormLoading = isLoading || isSubmitting || isValidating;
  const submitButtonDisabled = !isDirty || !isValid || isFormLoading;

  return (
    <AuthModal
      title="Login"
      onClose={onClose}
      onSubmit={onSubmit}
      buttonText="Sign In"
      submitButtonDisabled={submitButtonDisabled}
    >
      <Controller
        control={control}
        name="prevPassword"
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error, invalid },
        }) => (
          <FormField
            type="password"
            value={value}
            onBlur={onBlur}
            invalid={invalid}
            onChange={onChange}
            errorMessage={error?.message}
            placeholder="Latest password"
          />
        )}
      />
      <Controller
        control={control}
        name="newPassword"
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error, invalid },
        }) => (
          <FormField
            value={value}
            type="password"
            onBlur={onBlur}
            invalid={invalid}
            onChange={onChange}
            placeholder="New password"
            errorMessage={error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="confirmPassword"
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error, invalid },
        }) => (
          <FormField
            value={value}
            type="password"
            onBlur={onBlur}
            invalid={invalid}
            onChange={onChange}
            placeholder="Repeat a password"
            errorMessage={error?.message}
          />
        )}
      />
    </AuthModal>
  );
};
