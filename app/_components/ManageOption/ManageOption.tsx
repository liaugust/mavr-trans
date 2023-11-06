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

interface ManageOptionProps {
  title: string;
  onClose: () => void;
  defaultValues?: OptionSchema;
  onSubmitHandler: (value: OptionSchema) => Promise<void>;
}

export const ManageOption: FC<ManageOptionProps> = ({
  title,
  onClose,
  onSubmitHandler,
  defaultValues = initialValues,
}) => {
  const { control, handleSubmit, formState } = useForm<OptionSchema>({
    defaultValues,
    resolver: zodResolver(optionSchema),
    mode: "onBlur",
  });

  const { isDirty, isLoading, isValid } = formState;
  const submitButtonDisabled = !isDirty || !isValid || isLoading;

  const onSubmit = handleSubmit(async (values: OptionSchema) => {
    await onSubmitHandler(values);
  });

  return (
    <ManageEntityModal
      title={title}
      onClose={onClose}
      buttonText="Submit"
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
            placeholder="Enter name"
            errorMessage={error?.message}
          />
        )}
      />
    </ManageEntityModal>
  );
};
