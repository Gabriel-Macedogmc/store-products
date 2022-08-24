import { Module } from '@nestjs/common';
import { StudentsModule } from './modules/clients/students.module';
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  imports: [PrismaModule, StudentsModule],
})
export class AppModule {}
