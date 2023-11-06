"use server";

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
  UpdateOptionUseCase,
} from "../_storage";

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

export const updateOption = async (optionId: number, input: OptionSchema) => {
  const updateOptionUseCase = new UpdateOptionUseCase();
  return updateOptionUseCase.handle(optionId, input);
};
