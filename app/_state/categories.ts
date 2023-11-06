"use server";

import { fetch } from "../api/fetch";
import { getToken } from "./helper";
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
  UpdateCategoryUseCaseInput,
} from "../_storage";
import { del, put } from "@vercel/blob";

export const getCategory = async (
  categoryId: number
): Promise<CategoryEntity | null> => {
  const getCategoryUseCase = new GetCategoryUseCase();
  return getCategoryUseCase.handle({ id: categoryId });
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
    name: data.name,
    active: true,
    image: url,
  });
};

export const updateCategory = async (
  categoryId: number,
  input: UpdateCategoryUseCaseInput
) => {
  const token = await getToken();

  try {
    const response = await fetch(`/api/categories/${categoryId}`, {
      body: JSON.stringify(input),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "PUT",
    });

    if (!response.ok) {
      return { category: null };
    }

    const data = await response.json();

    return data;
  } catch (e: unknown) {
    console.log("Error: ", e);

    return { category: null };
  }
};

export const toggleCategoryActive = async (categoryId: number) => {
  const toggleCategoryActive = new ToggleCategoryActiveUseCase();
  return toggleCategoryActive.handle({ categoryId });
};
