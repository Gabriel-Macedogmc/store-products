import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions = (url?: string): ClientOptions => ({
    transport: Transport.GRPC,
    options: {
        package: ['client', 'category', 'product'],
        protoPath: [
            join(__dirname, '../proto/clients.proto'),
            join(__dirname, '../proto/product.proto'),
            join(__dirname, '../proto/category.proto'),
        ],
        url,
    },
});
