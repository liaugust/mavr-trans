import { FC } from "react";
import { AuthModal, AuthModalProps } from "../AuthModal";
import { FormField } from "../FormField";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUser } from "@/app/_state/users";
import { UserSchema, userSchema } from "@/app/_storage/modules/users/core";

interface SignUpModalProps
  extends Omit<
    AuthModalProps,
    "title" | "buttonText" | "onSubmit" | "submitButtonDisabled"
  > {
  onSuccess: () => void;
}

export const SignUpModal: FC<SignUpModalProps> = ({ onClose, onSuccess }) => {
  const { control, formState, handleSubmit } = useForm<UserSchema>({
    defaultValues: {
      phone: "+380505050505",
      email: "august.ivan228@gmail.com",
      password: "qwerty12345",
      lastName: "lipato",
      firstName: "ivan",
      confirmPassword: "qwerty12345",
    },
    resolver: zodResolver(userSchema),
    mode: "onBlur",
  });
  const { isDirty, isLoading, isValid, isSubmitting, isValidating } = formState;

  const onSubmit = handleSubmit(async (values: UserSchema) => {
    await createUser(values);
    onSuccess();
  });

  const isFormLoading = isLoading || isSubmitting || isValidating;
  const submitButtonDisabled = !isDirty || !isValid || isFormLoading;

  return (
    <AuthModal
      title="Create an account"
      onClose={onClose}
      onSubmit={onSubmit}
      buttonText="Create an account"
      submitButtonDisabled={submitButtonDisabled}
    >
      <Controller
        control={control}
        name="firstName"
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error, invalid },
        }) => (
          <FormField
            type="firstName"
            value={value}
            onBlur={onBlur}
            invalid={invalid}
            onChange={onChange}
            errorMessage={error?.message}
            placeholder="First name"
          />
        )}
      />
      <Controller
        control={control}
        name="lastName"
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error, invalid },
        }) => (
          <FormField
            value={value}
            onBlur={onBlur}
            invalid={invalid}
            onChange={onChange}
            placeholder="Second name"
            errorMessage={error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="phone"
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error, invalid },
        }) => (
          <FormField
            value={value}
            inputMode="tel"
            onBlur={onBlur}
            invalid={invalid}
            onChange={onChange}
            placeholder="Phone number"
            errorMessage={error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error, invalid },
        }) => (
          <FormField
            value={value}
            inputMode="email"
            type="email"
            onBlur={onBlur}
            invalid={invalid}
            onChange={onChange}
            placeholder="Email"
            errorMessage={error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error, invalid },
        }) => (
          <FormField
            value={value}
            inputMode="text"
            type="password"
            onBlur={onBlur}
            invalid={invalid}
            onChange={onChange}
            placeholder="Create a password"
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
            inputMode="text"
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
