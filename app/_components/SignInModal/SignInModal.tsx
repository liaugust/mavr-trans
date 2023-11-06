import { FC } from "react";
import { AuthModal, AuthModalProps } from "../AuthModal";
import { FormField } from "../FormField";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema, signInSchema } from "./sign-in-schema";
import { signIn } from "next-auth/react";

interface SignInModalProps
  extends Omit<
    AuthModalProps,
    "title" | "buttonText" | "onSubmit" | "submitButtonDisabled"
  > {
  onSuccess: () => void;
}

export const SignInModal: FC<SignInModalProps> = ({ onClose, onSuccess }) => {
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

    console.log("signInData", signInData);

    if (signInData?.error) {
      setError("root", {
        message: signInData.error,
      });
    } else {
      onSuccess();
      // router.replace("/admin/leads");
    }
  });

  const isFormLoading = isLoading || isSubmitting || isValidating;
  const submitButtonDisabled = !isDirty || !isValid || isFormLoading;

  return (
    <AuthModal
      title="Login"
      onClose={onClose}
      onSubmit={onSubmit}
      buttonText="Sign In"
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
          <FormField
            type="email"
            value={value}
            inputMode="email"
            onBlur={onBlur}
            invalid={invalid}
            onChange={onChange}
            errorMessage={error?.message}
            placeholder="Enter your email address"
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
            placeholder="Password"
            errorMessage={error?.message}
          />
        )}
      />
    </AuthModal>
  );
};
