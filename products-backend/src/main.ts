import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { grpcServerOptions } from './configs/grpc-server.options';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    grpcServerOptions,
  );

  await app.listen();

  console.log(
    `Microservice is listening on port ${grpcServerOptions.options.url}`,
  );
}

bootstrap();
