import { FC } from "react";
import { AuthModal, AuthModalProps } from "../AuthModal";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema, signInSchema } from "./sign-in-schema";
import { signIn } from "next-auth/react";
import { Input } from "../Input";
import { useTranslation } from "@/app/_i18n/client";
import { WithLang } from "@/app/types";
import Link from "next/link";
import { Trans } from "react-i18next";

interface SignInModalProps
  extends WithLang,
    Omit<
      AuthModalProps,
      "title" | "buttonText" | "onSubmit" | "submitButtonDisabled"
    > {
  onSuccess: () => void;
}

export const SignInModal: FC<SignInModalProps> = ({
  onClose,
  onSuccess,
  lang,
}) => {
  const { t } = useTranslation(lang);
  const { control, formState, handleSubmit, setError } = useForm<SignInSchema>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(signInSchema),
    mode: "onBlur",
  });
  const { isDirty, isLoading, isValid, isSubmitting, isValidating, errors } =
    formState;

  const onSubmit = handleSubmit(async (values: any) => {
    const signInData = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (signInData?.error) {
      setError("root", {
        message: signInData.error,
      });
    } else {
      onSuccess();
    }
  });

  const isFormLoading = isLoading || isSubmitting || isValidating;
  const submitButtonDisabled = !isDirty || !isValid || isFormLoading;

  return (
    <AuthModal
      lang={lang}
      title={t("modals.sign_in.title")}
      onClose={onClose}
      onSubmit={onSubmit}
      buttonText={t("modals.sign_in.buttons.submit")}
      errorMessage={errors.root?.message}
      submitButtonDisabled={submitButtonDisabled}
    >
      <Controller
        control={control}
        name="email"
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error, invalid },
        }) => (
          <Input
            type="email"
            value={value}
            inputMode="email"
            onBlur={onBlur}
            invalid={invalid}
            onChange={onChange}
            errorMessage={error?.message}
            placeholder={t("modals.sign_in.fields.email_placeholder")}
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
            placeholder={t("modals.sign_in.fields.password_placeholder")}
            errorMessage={error?.message}
          />
        )}
      />
      <Link href={`/${lang}?modal=signup`}>
        <Trans
          t={t}
          i18nKey="modals.sign_in.hint"
          // eslint-disable-next-line react/jsx-key
          components={[<span className="text-primary" />]}
        />
      </Link>
    </AuthModal>
  );
};
