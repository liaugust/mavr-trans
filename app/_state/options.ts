"use server";

import { OptionSchema, optionSchema } from "../_storage/modules/options/core";
import {
  CreateOptionUseCase,
  DeleteOptionUseCase,
  ToggleOptionActiveUseCase,
  UpdateOptionUseCase,
} from "../_storage";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

export const toggleOptionActive = async (optionId: number) => {
  const toggleOptionActive = new ToggleOptionActiveUseCase();
  const option = await toggleOptionActive.handle({ optionId });

  const referer = headers().get("referer");
  revalidatePath(referer as string);

  return option;
};

export const deleteOption = async (optionId: number) => {
  const deleteOptionUseCase = new DeleteOptionUseCase();
  await deleteOptionUseCase.handle({ id: optionId });

  const referer = headers().get("referer");
  revalidatePath(referer as string);
};

export const createOption = async (values: OptionSchema) => {
  const createOptionUseCase = new CreateOptionUseCase();
  const safeParsedBody = optionSchema.safeParse(values);

  if (!safeParsedBody.success) return;

  const { data } = safeParsedBody;

  const option = await createOptionUseCase.handle({
    name: data.name,
  });

  const referer = headers().get("referer");
  revalidatePath(referer as string);

  return option;
};

export const updateOption = async (optionId: number, input: OptionSchema) => {
  const updateOptionUseCase = new UpdateOptionUseCase();
  const option = await updateOptionUseCase.handle(optionId, input);

  const referer = headers().get("referer");
  revalidatePath(referer as string);

  return option;
};
