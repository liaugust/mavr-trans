import { BasePrismaAdapter } from "../../../infra/base-prisma.adapter";

import { CategoryMapper } from "./category.mapper";

import type { CategoryEntity } from "../core";
import type {
  CreateCategoryUseCaseInput,
  DeleteCategoryUseCaseInput,
  ToggleCategoryActiveUseCaseInput,
  UpdateCategoryUseCaseInput,
} from "../use-cases";
import { prisma } from "@/prisma";

export class CategoryAdapter extends BasePrismaAdapter {
  constructor() {
    super(prisma);
  }

  async createCategory(
    data: CreateCategoryUseCaseInput
  ): Promise<CategoryEntity> {
    const category = await this.prisma.category.create({ data });
    return CategoryMapper.toCategoryEntity(category);
  }

  async updateCategory(
    categoryId: number,
    data: UpdateCategoryUseCaseInput
  ): Promise<CategoryEntity> {
    const category = await this.prisma.category.update({
      where: { id: categoryId },
      data,
    });
    return CategoryMapper.toCategoryEntity(category);
  }

  async toggleCategoryActive(
    data: ToggleCategoryActiveUseCaseInput
  ): Promise<CategoryEntity> {
    const categoryToToggle = await this.prisma.category.findUniqueOrThrow({
      where: { id: data.categoryId },
    });

    const category = await this.prisma.category.update({
      where: { id: data.categoryId },
      data: { active: !categoryToToggle.active },
    });

    return CategoryMapper.toCategoryEntity(category);
  }

  async getCategories(): Promise<CategoryEntity[]> {
    const categories = await this.prisma.category.findMany();
    return categories.map(CategoryMapper.toCategoryEntity);
  }

  async deleteCategory(
    data: DeleteCategoryUseCaseInput
  ): Promise<CategoryEntity> {
    const category = await this.prisma.category.delete({
      where: { id: data.id },
    });
    return CategoryMapper.toCategoryEntity(category);
  }

  async getCategory(
    data: DeleteCategoryUseCaseInput
  ): Promise<CategoryEntity | null> {
    const category = await this.prisma.category.findUnique({
      where: { id: data.id },
    });

    if (!category) {
      return null;
    }

    return CategoryMapper.toCategoryEntity(category);
  }
}
