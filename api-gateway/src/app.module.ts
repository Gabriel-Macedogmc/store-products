import { Module } from '@nestjs/common';
import { ClientModule } from './modules/clients/clients.module';
import { ProductModule } from './modules/products/products.module';

@Module({
    imports: [ClientModule, ProductModule],
})
export class AppModule {}
