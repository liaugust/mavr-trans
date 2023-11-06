"use client";

import { FC } from "react";
import { ManageEntityModal } from "../ManageEntityModal";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { initialValues } from "./constants";
import { Input } from "../Input";
import {
  ACCEPTED_IMAGE_TYPES,
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
    defaultValues: {
      coefficient: defaultValues.coefficient,
      image: null as null | File,
      name: defaultValues.name,
    },
    resolver: zodResolver(categorySchema),
    mode: "onBlur",
  });

  const { isDirty, isLoading, isValid, isSubmitting, isValidating } = formState;
  const isFormLoading = isLoading || isSubmitting || isValidating;
  const submitButtonDisabled = !isDirty || !isValid || isFormLoading;

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
        render={({ field: { name, onChange } }) => (
          <input
            name={name}
            type="file"
            accept={ACCEPTED_IMAGE_TYPES.join(",")}
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
