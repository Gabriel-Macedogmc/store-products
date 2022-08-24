import { NestFactory } from '@nestjs/core';
import { setupSwagger } from 'config/swagger.config';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.startAllMicroservices();
    setupSwagger(app);
    await app.listen(3333);

    console.log(await app.getUrl());
}

bootstrap();
