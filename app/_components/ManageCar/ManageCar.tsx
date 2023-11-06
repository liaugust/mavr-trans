"use client";

import { FC } from "react";
import { ManageEntityModal } from "../ManageEntityModal";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { initialValues } from "./constants";
import { Input } from "../Input";
import { Select } from "../Select";
import { CategoryEntity } from "@/app/_storage/modules/categories/core";
import { useStore } from "@/app/store-provider";
import { CarSchema, carSchema } from "@/app/_storage/modules/cars/core";

interface ManageCarProps {
  title: string;
  onClose: () => void;
  defaultValues?: CarSchema;
  onSubmitHandler: (formData: FormData) => Promise<void>;
}

const getOptionLabel = (option: unknown) => {
  return (option as CategoryEntity).name;
};

const getOptionValue = (option: unknown) => {
  return (option as CategoryEntity).id.toString();
};

export const ManageCar: FC<ManageCarProps> = ({
  title,
  onClose,
  onSubmitHandler,
  defaultValues = initialValues,
}) => {
  const { categories } = useStore();
  const { control, handleSubmit, formState } = useForm<CarSchema>({
    defaultValues,
    resolver: zodResolver(carSchema),
    mode: "onBlur",
  });

  const { isDirty, isLoading, isValid } = formState;
  const submitButtonDisabled = !isDirty || !isValid || isLoading;

  const onSubmit = handleSubmit(async (values: CarSchema) => {
    const formData = new FormData();
    formData.set("name", values.name);
    formData.set("image", values.image);
    formData.set("seats", values.seats.toString());
    formData.set("categoryId", values.categoryId.toString());

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
        name="categoryId"
        control={control}
        render={({
          field: { name, value, onChange, onBlur },
          fieldState: { invalid, error },
        }) => (
          <Select
            options={categories}
            getOptionLabel={getOptionLabel}
            getOptionValue={getOptionValue}
            name={name}
            value={categories.find((c) => c.id === value)}
            onBlur={onBlur}
            invalid={invalid}
            onChange={(option) => {
              onChange(Number((option as CategoryEntity).id));
            }}
            errorMessage={error?.message}
            placeholder="Choose category"
          />
        )}
      />
      <Controller
        name="seats"
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
            placeholder="Enter seats"
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
