import { status } from '@grpc/grpc-js';
import { Inject, Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { IClientsRepository } from '../../repositories/IClientsRepository';

@Injectable()
export class FindOneClientByIdService {
  constructor(
    @Inject('ClientsRepository')
    private readonly studentsRepository: IClientsRepository
  ) {}
  async exec(id: string) {
    const student = await this.studentsRepository.findOneClientById(id);

    if (!student) {
      throw new RpcException({
        code: status.NOT_FOUND,
        message: `Student with id ${id} not found`,
      });
    }

    return student;
  }
}
