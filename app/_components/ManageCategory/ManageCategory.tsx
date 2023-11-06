"use client";

import { FC } from "react";
import { ManageEntityModal } from "../ManageEntityModal";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { initialValues } from "./constants";
import { Input } from "../Input";
import {
  CategorySchema,
  categorySchema,
} from "@/app/_storage/modules/categories/core";

interface ManageCategoryProps {
  title: string;
  onClose: () => void;
  defaultValues?: CategorySchema;
  onSubmitHandler: (formData: FormData) => Promise<void>;
}

export const ManageCategory: FC<ManageCategoryProps> = ({
  title,
  onClose,
  onSubmitHandler,
  defaultValues = initialValues,
}) => {
  const { control, handleSubmit, formState } = useForm<CategorySchema>({
    defaultValues,
    resolver: zodResolver(categorySchema),
    mode: "onBlur",
  });

  const { isDirty, isLoading, isValid } = formState;
  const submitButtonDisabled = !isDirty || !isValid || isLoading;

  const onSubmit = handleSubmit(async (values: CategorySchema) => {
    const formData = new FormData();
    formData.set("name", values.name);
    formData.set("image", values.image);
    formData.set("coefficient", values.coefficient.toString());

    await onSubmitHandler(formData);
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
      <Controller
        name="coefficient"
        control={control}
        render={({
          field: { name, value, onChange, onBlur },
          fieldState: { invalid, error },
        }) => (
          <Input
            name={name}
            value={value}
            onBlur={onBlur}
            inputMode="decimal"
            invalid={invalid}
            onChange={onChange}
            errorMessage={error?.message}
            placeholder="Enter coefficient"
          />
        )}
      />
      <Controller
        name="image"
        control={control}
        render={({
          field: { name, value, onChange, onBlur },
          fieldState: { invalid, error },
        }) => (
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files?.item(0);
              if (file) onChange(file);
            }}
          />
        )}
      />
    </ManageEntityModal>
  );
};
