import { CategoryModule } from '@modules/category/category.module';
import { CategoryRepository } from '@modules/category/infra/prisma/category.repository';
import { CreateProductService } from '@modules/products/useCases/createProduct/createProduct.service';
import { Module } from '@nestjs/common';
import { ProductsController } from './infra/controllers/products.controller';
import { ProductsRepository } from './infra/prisma/products.repository';

@Module({
  imports: [CategoryModule],
  controllers: [ProductsController],
  providers: [
    CreateProductService,
    {
      provide: 'ProductsRepository',
      useClass: ProductsRepository,
    },
    {
      provide: 'CategoryRepository',
      useClass: CategoryRepository,
    },
  ],
})
export class ProductsModule {}
