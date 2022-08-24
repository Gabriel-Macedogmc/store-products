import { ProductModel } from '@prisma/client';
import { ICreateProductDto } from '../dtos/createProduct.dto';

export interface IProdutsRepository {
  create(data: ICreateProductDto): Promise<ProductModel>;
  findById(id: string): Promise<ProductModel>;
}
