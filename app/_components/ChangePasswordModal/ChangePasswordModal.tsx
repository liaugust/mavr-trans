import { FC } from "react";
import { AuthModal, AuthModalProps } from "../AuthModal";
import { Input } from "../Input";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ChangePasswordSchema,
  changePasswordSchema,
} from "./change-password-schema";
import { resetPassword } from "@/app/_state/users";
import { useTranslation } from "@/app/_i18n/client";

interface ChangePasswordModalProps
  extends Omit<
    AuthModalProps,
    "title" | "buttonText" | "onSubmit" | "submitButtonDisabled"
  > {
  onSuccess: () => void;
}

export const ChangePasswordModal: FC<ChangePasswordModalProps> = ({
  onClose,
  lang,
}) => {
  const { t } = useTranslation(lang);
  const { control, formState, handleSubmit, setError } =
    useForm<ChangePasswordSchema>({
      defaultValues: {
        newPassword: "",
        prevPassword: "",
        confirmPassword: "",
      },
      resolver: zodResolver(changePasswordSchema),
      mode: "onBlur",
    });
  const { isDirty, isLoading, isValid, isSubmitting, isValidating, errors } =
    formState;

  const onSubmit = handleSubmit(async (values: ChangePasswordSchema) => {
    try {
      await resetPassword(values);
      onClose();
    } catch (e) {
      const error = e instanceof Error ? e : new Error("Unknown error");
      setError("root", { message: error.message });
    }
  });

  const isFormLoading = isLoading || isSubmitting || isValidating;
  const submitButtonDisabled = !isDirty || !isValid || isFormLoading;

  return (
    <AuthModal
      lang={lang}
      title={t("modals.reset_password.title")}
      onClose={onClose}
      onSubmit={onSubmit}
      errorMessage={errors.root?.message}
      buttonText={t("modals.reset_password.buttons.submit")}
      submitButtonDisabled={submitButtonDisabled}
    >
      <Controller
        control={control}
        name="prevPassword"
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error, invalid },
        }) => (
          <Input
            type="password"
            value={value}
            onBlur={onBlur}
            invalid={invalid}
            onChange={onChange}
            errorMessage={error?.message}
            placeholder={t(
              "modals.reset_password.fields.prev_password_placeholder"
            )}
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
          <Input
            value={value}
            type="password"
            onBlur={onBlur}
            invalid={invalid}
            onChange={onChange}
            placeholder={t(
              "modals.reset_password.fields.new_password_placeholder"
            )}
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
            type="password"
            onBlur={onBlur}
            invalid={invalid}
            onChange={onChange}
            placeholder={t(
              "modals.reset_password.fields.repeat_password_placeholder"
            )}
            errorMessage={error?.message}
          />
        )}
      />
    </AuthModal>
  );
};
