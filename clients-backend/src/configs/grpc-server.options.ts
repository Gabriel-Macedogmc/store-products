import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcServerOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'client',
    protoPath: join(__dirname, '../modules/clients/infra/grpc/clients.proto'),
    url: 'clients-backend:5001',
  },
} as MicroserviceOptions;
