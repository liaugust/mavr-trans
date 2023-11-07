"use server";

import {
  CategoryEntity,
  categorySchema,
} from "../_storage/modules/categories/core";
import {
  CreateCategoryUseCase,
  DeleteCategoryUseCase,
  GetCategoriesUseCase,
  GetCategoryUseCase,
  ToggleCategoryActiveUseCase,
  UpdateCategoryUseCase,
} from "../_storage";
import { del, put } from "@vercel/blob";

export const getCategory = async (
  categoryId: number
): Promise<CategoryEntity | null> => {
  const getCategoryUseCase = new GetCategoryUseCase();
  return getCategoryUseCase.handle({ id: categoryId });
};

export const toggleCategoryActive = async (categoryId: number) => {
  const toggleCategoryActive = new ToggleCategoryActiveUseCase();
  return toggleCategoryActive.handle({ categoryId });
};

export const getCategories = async (): Promise<CategoryEntity[]> => {
  const getCategoriesUseCase = new GetCategoriesUseCase();
  return getCategoriesUseCase.handle();
};

export const deleteCategory = async (categoryId: number) => {
  const deleteCategoryUseCase = new DeleteCategoryUseCase();
  const categoryToDelete = await getCategory(categoryId);

  if (!categoryToDelete) return;

  if (categoryToDelete.image) {
    await del(categoryToDelete.image);
  }

  await deleteCategoryUseCase.handle({ id: categoryId });
};

export const createCategory = async (formData: FormData) => {
  const createCategoryUseCase = new CreateCategoryUseCase();
  const coefficient = formData.get("coefficient");
  const image = formData.get("image") as File;
  const name = formData.get("name");

  const safeParsedBody = categorySchema.safeParse({
    name,
    image,
    coefficient,
  });

  if (!safeParsedBody.success) return;

  const { data } = safeParsedBody;

  const file = await image.arrayBuffer();
  const fileType = image.name.split(".").pop();
  const filePath = `category-images/${Date.now()}.${fileType}`;

  const { url } = await put(filePath, file, { access: "public" });

  return createCategoryUseCase.handle({
    coefficient: data.coefficient,
    maximumSeats: data.seats,
    name: data.name,
    active: true,
    image: url,
  });
};

export const updateCategory = async (
  categoryId: number,
  formData: FormData
) => {
  const category = await getCategory(categoryId);

  if (!category) return null;

  const updateCategoryUseCase = new UpdateCategoryUseCase();
  const coefficient = formData.get("coefficient");
  const seats = formData.get("seats");
  const image = formData.get("image") as File;
  const name = formData.get("name");

  const safeParsedBody = categorySchema.safeParse({
    coefficient,
    seats,
    image,
    name,
  });

  if (!safeParsedBody.success) {
    console.log(
      "safeParse failed",
      JSON.stringify(safeParsedBody.error, null, 4)
    );
    return null;
  }

  const { data } = safeParsedBody;

  let url: string | undefined = undefined;

  if (data.image && data.image !== "null") {
    const file = await image.arrayBuffer();
    const fileType = image.name.split(".").pop();
    const filePath = `category-images/${Date.now()}.${fileType}`;

    const result = await put(filePath, file, { access: "public" });

    await del(category.image);

    url = result.url;
  }

  return updateCategoryUseCase.handle(categoryId, {
    coefficient: data.coefficient,
    maximumSeats: data.seats,
    name: data.name,
    image: url,
  });
};
