import { CreateProductService } from '@modules/products/useCases/createProduct/createProduct.service';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {
  constructor(private readonly createProductService: CreateProductService) {}

  @GrpcMethod('ProductService', 'Create')
  async create(data: any) {
    console.log('CONTROLLER', data);

    const product = await this.createProductService.exec({
      name: data.name,
      price: data.price,
      category_id: data.categoryId,
      description: data.description,
    });

    return product;
  }
}
