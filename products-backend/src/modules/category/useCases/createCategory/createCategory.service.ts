import { ICategoryRepository } from '@modules/category/repositories/ICategoryRepository';
import { Inject, Injectable } from '@nestjs/common';
import { ICreateCategoryDTO } from './../../dtos/createCategory.dto';

@Injectable()
export class CreateCategoryService {
  constructor(
    @Inject('CategoryRepository')
    private readonly categoryRepository: ICategoryRepository,
  ) {}
  async exec(data: ICreateCategoryDTO) {
    const category = await this.categoryRepository.create(data);

    return category;
  }
}
