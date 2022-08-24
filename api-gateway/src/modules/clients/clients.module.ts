import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientOptions } from 'config/grpc-client.config';
import { ClientsController } from './infra/controllers/clients.controller';
@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'CLIENTS_PACKAGE',
                ...grpcClientOptions('clients-backend:5001'),
            },
        ]),
    ],
    controllers: [ClientsController],
})
export class ClientModule {}
