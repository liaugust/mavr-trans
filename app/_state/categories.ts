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
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

export const getCategory = async (
  categoryId: number
): Promise<CategoryEntity | null> => {
  const getCategoryUseCase = new GetCategoryUseCase();
  const category = await getCategoryUseCase.handle({ id: categoryId });

  const referer = headers().get("referer");
  revalidatePath(referer as string);

  return category;
};

export const toggleCategoryActive = async (categoryId: number) => {
  const toggleCategoryActive = new ToggleCategoryActiveUseCase();
  const category = await toggleCategoryActive.handle({ categoryId });

  const referer = headers().get("referer");
  revalidatePath(referer as string);

  return category;
};

export const deleteCategory = async (categoryId: number) => {
  const deleteCategoryUseCase = new DeleteCategoryUseCase();
  const categoryToDelete = await getCategory(categoryId);

  if (!categoryToDelete) return;

  if (categoryToDelete.image) {
    await del(categoryToDelete.image);
  }

  await deleteCategoryUseCase.handle({ id: categoryId });

  const referer = headers().get("referer");
  revalidatePath(referer as string);
};

export const createCategory = async (formData: FormData) => {
  const createCategoryUseCase = new CreateCategoryUseCase();
  const coefficient = formData.get("coefficient");
  const maximumSeats = formData.get("maximumSeats");
  const image = formData.get("image") as File;
  const name = formData.get("name");

  const safeParsedBody = categorySchema.safeParse({
    name,
    image,
    coefficient,
    maximumSeats,
  });

  if (!safeParsedBody.success) return;

  const { data } = safeParsedBody;

  const file = await image.arrayBuffer();
  const fileType = image.name.split(".").pop();
  const filePath = `category-images/${Date.now()}.${fileType}`;

  const { url } = await put(filePath, file, { access: "public" });

  const category = await createCategoryUseCase.handle({
    maximumSeats: data.maximumSeats,
    coefficient: data.coefficient,
    name: data.name,
    active: true,
    image: url,
  });

  const referer = headers().get("referer");
  revalidatePath(referer as string);

  return category;
};

export const updateCategory = async (
  categoryId: number,
  formData: FormData
) => {
  const category = await getCategory(categoryId);

  if (!category) return null;

  const updateCategoryUseCase = new UpdateCategoryUseCase();
  const coefficient = formData.get("coefficient");
  const maximumSeats = formData.get("maximumSeats");
  const image = formData.get("image") as File;
  const name = formData.get("name");

  const safeParsedBody = categorySchema.safeParse({
    maximumSeats,
    coefficient,
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

  const createdCategory = await updateCategoryUseCase.handle(categoryId, {
    coefficient: data.coefficient,
    maximumSeats: data.maximumSeats,
    name: data.name,
    image: url,
  });

  const referer = headers().get("referer");
  revalidatePath(referer as string);

  return createdCategory;
};
