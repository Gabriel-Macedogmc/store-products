import { ICategoryRepository } from '@modules/category/repositories/ICategoryRepository';
import { PrismaService } from '@modules/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CategoryModel } from '@prisma/client';
import { ICreateCategoryDTO } from './../../dtos/createCategory.dto';

@Injectable()
export class CategoryRepository implements ICategoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  findById(id: string): Promise<CategoryModel> {
    return this.prisma.categoryModel.findFirst({
      where: { id },
    });
  }

  create(data: ICreateCategoryDTO): Promise<CategoryModel> {
    const product = this.prisma.categoryModel.create({ data });

    return product;
  }
}
