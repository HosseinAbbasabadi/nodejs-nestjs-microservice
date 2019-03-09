import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';
import { Transport } from '@nestjs/common/enums/transport.enum';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(UserModule, {
    transport: Transport.TCP,
    options: {
      port: 3006
    }
  });
  app.listen(() => console.log('User Management Microservice is listening'));  
}
bootstrap();
