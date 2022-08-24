import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateClientDTO } from '../../dtos/createClient.dto';
import { CreateClientService } from '../../useCases/createClient/createClient.service';
import { FindAllClientsService } from '../../useCases/findAllClients/findAllClients.service';
import { FindOneClientByIdService } from '../../useCases/findOneClientById/findOneClientById.service';

@Controller('clients')
export class ClientsController {
  constructor(
    private readonly findOneClientByIdService: FindOneClientByIdService,
    private readonly createClient: CreateClientService,
    private readonly findAllClientsService: FindAllClientsService
  ) {}

  @GrpcMethod('ClientService', 'FindOne')
  async findOnde(data: any) {
    const response = await this.findOneClientByIdService.exec(data.id);
    return response;
  }

  @GrpcMethod('ClientService', 'FindAll')
  async findAll() {
    const response = await this.findAllClientsService.exec();
    return response;
  }

  @GrpcMethod('ClientService', 'Create')
  async create(data: CreateClientDTO) {
    const response = await this.createClient.exec(data);
    return response;
  }
}
