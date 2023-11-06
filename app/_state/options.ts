"use server";

import { fetch } from "../api/fetch";
import { getToken } from "./helper";
import {
  OptionEntity,
  OptionSchema,
  optionSchema,
} from "../_storage/modules/options/core";
import {
  CreateOptionUseCase,
  DeleteOptionUseCase,
  GetOptionsUseCase,
  ToggleOptionActiveUseCase,
  UpdateOptionUseCaseInput,
} from "../_storage";
import { $options } from "./store";

export const getOptions = async (): Promise<OptionEntity[]> => {
  const getOptionsUseCase = new GetOptionsUseCase();
  return getOptionsUseCase.handle();
};

export const toggleOptionActive = async (optionId: number) => {
  const toggleOptionActive = new ToggleOptionActiveUseCase();
  return toggleOptionActive.handle({ optionId });
};

export const deleteOption = async (optionId: number) => {
  const deleteOptionUseCase = new DeleteOptionUseCase();
  return deleteOptionUseCase.handle({ id: optionId });
};

export const createOption = async (values: OptionSchema) => {
  const createOptionUseCase = new CreateOptionUseCase();
  const safeParsedBody = optionSchema.safeParse(values);

  if (!safeParsedBody.success) return;

  const { data } = safeParsedBody;

  return createOptionUseCase.handle({
    name: data.name,
  });
};

export const updateOption = async (
  optionId: number,
  input: UpdateOptionUseCaseInput
) => {
  const token = await getToken();

  try {
    const response = await fetch(`/api/options/${optionId}`, {
      body: JSON.stringify(input),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "PUT",
    });

    if (!response.ok) {
      return { option: null };
    }

    const data = await response.json();

    return data;
  } catch (e: unknown) {
    console.log("Error: ", e);

    return { option: null };
  }
};
