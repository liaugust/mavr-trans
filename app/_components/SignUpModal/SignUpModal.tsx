import { FC } from "react";
import { AuthModal, AuthModalProps } from "../AuthModal";
import { Input } from "../Input";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUser } from "@/app/_state/users";
import { UserSchema, userSchema } from "@/app/_storage/modules/users/core";
import { useTranslation } from "@/app/_i18n/client";

interface SignUpModalProps
  extends Omit<
    AuthModalProps,
    "title" | "buttonText" | "onSubmit" | "submitButtonDisabled"
  > {
  onSuccess: () => void;
}

export const SignUpModal: FC<SignUpModalProps> = ({
  onClose,
  onSuccess,
  lang,
}) => {
  const { t } = useTranslation(lang);
  const { control, formState, handleSubmit } = useForm<UserSchema>({
    defaultValues: {
      phone: "",
      email: "",
      password: "",
      lastName: "",
      firstName: "",
      confirmPassword: "",
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
      lang={lang}
      title={t("modals.sign_up.title")}
      onClose={onClose}
      onSubmit={onSubmit}
      buttonText={t("modals.sign_up.buttons.submit")}
      submitButtonDisabled={submitButtonDisabled}
    >
      <Controller
        control={control}
        name="firstName"
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error, invalid },
        }) => (
          <Input
            type="firstName"
            value={value}
            onBlur={onBlur}
            invalid={invalid}
            onChange={onChange}
            errorMessage={error?.message}
            placeholder={t("modals.sign_up.fields.first_name_placeholder")}
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
          <Input
            value={value}
            onBlur={onBlur}
            invalid={invalid}
            onChange={onChange}
            placeholder={t("modals.sign_up.fields.last_name_placeholder")}
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
          <Input
            value={value}
            inputMode="tel"
            onBlur={onBlur}
            invalid={invalid}
            onChange={onChange}
            placeholder={t("modals.sign_up.fields.phone_placeholder")}
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
          <Input
            value={value}
            inputMode="email"
            type="email"
            onBlur={onBlur}
            invalid={invalid}
            onChange={onChange}
            placeholder={t("modals.sign_up.fields.email_placeholder")}
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
          <Input
            value={value}
            inputMode="text"
            type="password"
            onBlur={onBlur}
            invalid={invalid}
            onChange={onChange}
            placeholder={t("modals.sign_up.fields.create_password_placeholder")}
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
          <Input
            value={value}
            inputMode="text"
            type="password"
            onBlur={onBlur}
            invalid={invalid}
            onChange={onChange}
            placeholder={t(
              "modals.sign_up.fields.confirm_password_placeholder"
            )}
            errorMessage={error?.message}
          />
        )}
      />
    </AuthModal>
  );
};
