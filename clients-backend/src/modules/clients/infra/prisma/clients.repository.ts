import { Injectable } from '@nestjs/common';
import { ClientModel } from '@prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateClientDTO } from '../../dtos/createClient.dto';
import { IClientsRepository } from '../../repositories/IClientsRepository';

@Injectable()
export class ClientsRepository implements IClientsRepository {
  constructor(private readonly prismaService: PrismaService) {}
  findOneClientByEmail(email: string): Promise<ClientModel> {
    return this.prismaService.clientModel.findUnique({
      where: { email },
    });
  }

  findAll(): Promise<ClientModel[]> {
    return this.prismaService.clientModel.findMany();
  }

  create(data: CreateClientDTO): Promise<ClientModel> {
    return this.prismaService.clientModel.create({ data });
  }

  findOneClientById(id: string): Promise<ClientModel> {
    return this.prismaService.clientModel.findUnique({
      where: { id },
    });
  }
}
