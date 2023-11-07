"use client";

import { FC } from "react";
import { ManageEntityModal } from "../ManageEntityModal";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { initialValues } from "./constants";
import { Input } from "../Input";
import {
  OptionSchema,
  optionSchema,
} from "@/app/_storage/modules/options/core";
import { WithLang } from "@/app/types";
import { useTranslation } from "@/app/_i18n/client";

interface ManageOptionProps extends WithLang {
  title: string;
  onClose: () => void;
  defaultValues?: OptionSchema;
  onSubmitHandler: (value: OptionSchema) => Promise<void>;
}

export const ManageOption: FC<ManageOptionProps> = ({
  lang,
  title,
  onClose,
  onSubmitHandler,
  defaultValues = initialValues,
}) => {
  const { t } = useTranslation(lang);
  const { control, handleSubmit, formState } = useForm<OptionSchema>({
    defaultValues,
    resolver: zodResolver(optionSchema),
    mode: "onBlur",
  });

  const { isDirty, isLoading, isValid, isSubmitting, isValidating } = formState;
  const isFormLoading = isLoading || isSubmitting || isValidating;
  const submitButtonDisabled = !isDirty || !isValid || isFormLoading;

  const onSubmit = handleSubmit(async (values: OptionSchema) => {
    await onSubmitHandler(values);
  });

  return (
    <ManageEntityModal
      title={title}
      onClose={onClose}
      buttonText={t("admin.pages.settings.buttons.submit")}
      onSubmit={onSubmit}
      submitButtonDisabled={submitButtonDisabled}
    >
      <Controller
        name="name"
        control={control}
        render={({
          field: { name, value, onChange, onBlur },
          fieldState: { invalid, error },
        }) => (
          <Input
            name={name}
            value={value}
            inputMode="text"
            onBlur={onBlur}
            invalid={invalid}
            onChange={onChange}
            placeholder={t(
              "admin.pages.settings.options.form.name_placeholder"
            )}
            errorMessage={error?.message}
          />
        )}
      />
    </ManageEntityModal>
  );
};
