"use client";

import { FC } from "react";
import { ManageEntityModal } from "../ManageEntityModal";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { initialValues } from "./constants";
import { Input } from "../Input";
import { Select } from "../Select";
import { CategoryEntity } from "@/app/_storage/modules/categories/core";
import { useStore } from "@/app/(routes)/[lang]/store-provider";
import {
  ACCEPTED_IMAGE_TYPES,
  CarSchema,
  carSchema,
} from "@/app/_storage/modules/cars/core";
import { WithLang } from "@/app/types";
import { useTranslation } from "@/app/_i18n/client";

interface ManageCarProps extends WithLang {
  title: string;
  onClose: () => void;
  defaultValues?: Omit<CarSchema, "files">;
  onSubmitHandler: (formData: FormData) => Promise<void>;
}

const getOptionLabel = (option: unknown) => {
  return (option as CategoryEntity).name;
};

const getOptionValue = (option: unknown) => {
  return (option as CategoryEntity).id.toString();
};

export const ManageCar: FC<ManageCarProps> = ({
  lang,
  title,
  onClose,
  onSubmitHandler,
  defaultValues = initialValues,
}) => {
  const { t } = useTranslation(lang);
  const { categories } = useStore();
  const { control, handleSubmit, formState } = useForm<CarSchema>({
    defaultValues: {
      categoryId: defaultValues.categoryId,
      seats: defaultValues.seats,
      name: defaultValues.name,
      image: null as null | File,
    },
    resolver: zodResolver(carSchema),
    mode: "onBlur",
  });

  const { isDirty, isLoading, isValid, isSubmitting, isValidating } = formState;
  const isFormLoading = isLoading || isSubmitting || isValidating;
  const submitButtonDisabled = !isDirty || !isValid || isFormLoading;

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
            placeholder={t("admin.pages.settings.cars.form.name_placeholder")}
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
            placeholder={t(
              "admin.pages.settings.cars.form.category_placeholder"
            )}
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
            placeholder={t("admin.pages.settings.cars.form.seats_placeholder")}
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
