import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientOptions } from 'config/grpc-client.config';
import { ProductsController } from './infra/controllers/products.controller';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'PRODUCTS_PACKAGE',
                ...grpcClientOptions('products-backend:5002'),
            },
        ]),
    ],
    controllers: [ProductsController],
})
export class ProductModule {}
