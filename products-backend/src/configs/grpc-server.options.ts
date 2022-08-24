import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcServerOptions = {
  transport: Transport.GRPC,
  options: {
    package: ['product', 'category'],
    protoPath: [
      join(__dirname, '../modules/products/infra/grpc/product.proto'),
      join(__dirname, '../modules/category/infra/grpc/category.proto'),
    ],
    url: 'products-backend:5002',
  },
} as GrpcOptions;
