import { status } from '@grpc/grpc-js';
import { Inject, Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { CreateClientDTO } from '../../dtos/createClient.dto';
import { IClientsRepository } from './../../repositories/IClientsRepository';

@Injectable()
export class CreateClientService {
  constructor(
    @Inject('ClientsRepository')
    private readonly clientsRepository: IClientsRepository
  ) {}

  async exec(data: CreateClientDTO) {
    const clientExist = await this.clientsRepository.findOneClientByEmail(
      data.email
    );

    if (clientExist) {
      throw new RpcException({
        code: status.ALREADY_EXISTS,
        message: `Client with email ${data.email} already exist`,
      });
    }

    const client = await this.clientsRepository.create(data);

    return client;
  }
}
