import { PrismaService } from '@modules/prisma/prisma.service';
import { IProdutsRepository } from '@modules/products/repositories/IProductsRepository';
import { Injectable } from '@nestjs/common';
import { ProductModel } from '@prisma/client';

@Injectable()
export class ProductsRepository implements IProdutsRepository {
  constructor(private readonly prisma: PrismaService) {}

  findById(id: string): Promise<ProductModel> {
    return this.prisma.productModel.findUnique({
      where: { id },
    });
  }

  create(data: any): Promise<ProductModel> {
    const product = this.prisma.productModel.create({
      data: {
        ...data,
      },
    });

    return product;
  }
}
