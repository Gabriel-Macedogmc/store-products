import { ClientModel } from '@prisma/client';
import { CreateClientDTO } from '../dtos/createClient.dto';

export interface IClientsRepository {
  findOneClientById(id: string): Promise<ClientModel>;
  findOneClientByEmail(email: string): Promise<ClientModel>;
  create(data: CreateClientDTO): Promise<ClientModel>;
  findAll(): Promise<ClientModel[]>;
}
