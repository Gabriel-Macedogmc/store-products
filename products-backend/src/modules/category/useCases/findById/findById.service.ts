import { status } from '@grpc/grpc-js';
import { ICategoryRepository } from '@modules/category/repositories/ICategoryRepository';
import { Inject, Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class FindByIdService {
  constructor(
    @Inject('CategoryRepository')
    private readonly categoryRepository: ICategoryRepository,
  ) {}
  async exec(id: string) {
    const category = await this.categoryRepository.findById(id);

    if (!category) {
      throw new RpcException({
        code: status.NOT_FOUND,
        message: `Category with id ${id} not found`,
      });
    }

    return category;
  }
}
