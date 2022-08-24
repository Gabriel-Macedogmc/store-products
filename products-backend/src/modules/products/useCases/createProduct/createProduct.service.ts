import { status } from '@grpc/grpc-js';
import { ICategoryRepository } from '@modules/category/repositories/ICategoryRepository';
import { ICreateProductDto } from '@modules/products/dtos/createProduct.dto';
import { IProdutsRepository } from '@modules/products/repositories/IProductsRepository';
import { Inject, Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class CreateProductService {
  constructor(
    @Inject('ProductsRepository')
    private readonly productsRepository: IProdutsRepository,
    @Inject('CategoryRepository')
    private readonly categoryRepository: ICategoryRepository,
  ) {}

  async exec(data: ICreateProductDto) {
    const categoryExist = await this.categoryRepository.findById(
      data.category_id,
    );

    if (!categoryExist) {
      throw new RpcException({
        code: status.NOT_FOUND,
        message: `Category with id ${data.category_id} not found`,
      });
    }

    const product = await this.productsRepository.create(data);
    console.log(data);
    return product;
  }
}
