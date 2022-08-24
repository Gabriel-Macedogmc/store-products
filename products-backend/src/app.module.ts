import { ProductsModule } from '@modules/products/products.module';
import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  imports: [PrismaModule, ProductsModule],
})
export class AppModule {}
