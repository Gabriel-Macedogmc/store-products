import { Module } from '@nestjs/common';
import { ClientsController } from './infra/controllers/client.controller';
import { ClientsRepository } from './infra/prisma/clients.repository';
import { CreateClientService } from './useCases/createClient/createClient.service';
import { FindAllClientsService } from './useCases/findAllClients/findAllClients.service';
import { FindOneClientByIdService } from './useCases/findOneClientById/findOneClientById.service';

@Module({
  controllers: [ClientsController],
  providers: [
    { provide: 'ClientsRepository', useClass: ClientsRepository },
    FindOneClientByIdService,
    CreateClientService,
    FindAllClientsService,
  ],
})
export class StudentsModule {}
