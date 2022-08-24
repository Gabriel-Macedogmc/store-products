import { ICreateCategoryDTO } from '@modules/category/dtos/createCategory.dto';
import { IFindByIdCategoryDTO } from '@modules/category/dtos/findByIdCategory.dto';
import { CreateCategoryService } from '@modules/category/useCases/createCategory/createCategory.service';
import { FindByIdService } from '@modules/category/useCases/findById/findById.service';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('category')
export class CategoryController {
  constructor(
    private readonly createCategoryService: CreateCategoryService,
    private readonly findByIdService: FindByIdService,
  ) {}

  @GrpcMethod('CategoryService', 'Create')
  async create(data: ICreateCategoryDTO) {
    const category = await this.createCategoryService.exec(data);

    return category;
  }

  @GrpcMethod('CategoryService', 'FindOnde')
  async findOndeById(data: IFindByIdCategoryDTO) {
    const category = await this.findByIdService.exec(data.id);

    return category;
  }
}
