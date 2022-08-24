import { CreateCategoryService } from '@modules/category/useCases/createCategory/createCategory.service';
import { Module } from '@nestjs/common';
import { CategoryController } from './infra/controllers/category.controller';
import { CategoryRepository } from './infra/prisma/category.repository';
import { FindByIdService } from './useCases/findById/findById.service';

@Module({
  controllers: [CategoryController],
  providers: [
    CreateCategoryService,
    FindByIdService,
    {
      provide: 'CategoryRepository',
      useClass: CategoryRepository,
    },
  ],
  exports: [
    {
      provide: 'CategoryRepository',
      useClass: CategoryRepository,
    },
  ],
})
export class CategoryModule {}
