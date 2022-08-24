import { CategoryModel } from '@prisma/client';

export interface ICategoryRepository {
  create(category: CategoryModel): Promise<CategoryModel>;
  findById(id: string): Promise<CategoryModel>;
}
