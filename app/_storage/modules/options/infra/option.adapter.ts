import { BasePrismaAdapter } from "../../../infra/base-prisma.adapter";

import { OptionMapper } from "./option.mapper";

import type { OptionEntity } from "../core";
import type {
  CreateOptionUseCaseInput,
  DeleteOptionUseCaseInput,
  ToggleOptionActiveUseCaseInput,
} from "../use-cases";
import { prisma } from "@/prisma";

export class OptionAdapter extends BasePrismaAdapter {
  constructor() {
    super(prisma);
  }

  async createOption(data: CreateOptionUseCaseInput): Promise<OptionEntity> {
    const option = await this.prisma.option.create({ data });
    return OptionMapper.toOptionEntity(option);
  }

  async toggleOptionActive(
    data: ToggleOptionActiveUseCaseInput
  ): Promise<OptionEntity> {
    const optionToToggle = await this.prisma.option.findUniqueOrThrow({
      where: { id: data.optionId },
    });

    const option = await this.prisma.option.update({
      where: { id: data.optionId },
      data: { active: !optionToToggle.active },
    });

    return OptionMapper.toOptionEntity(option);
  }

  async updateOption(
    optionId: number,
    data: CreateOptionUseCaseInput
  ): Promise<OptionEntity> {
    const option = await this.prisma.option.update({
      where: { id: optionId },
      data,
    });
    return OptionMapper.toOptionEntity(option);
  }

  async getOptions(): Promise<OptionEntity[]> {
    const options = await this.prisma.option.findMany();
    return options.map(OptionMapper.toOptionEntity);
  }

  async deleteOption(data: DeleteOptionUseCaseInput): Promise<OptionEntity> {
    const option = await this.prisma.option.delete({ where: { id: data.id } });
    return OptionMapper.toOptionEntity(option);
  }
}
