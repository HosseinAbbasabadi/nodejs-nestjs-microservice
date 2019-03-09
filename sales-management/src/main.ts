import { NestFactory } from '@nestjs/core';
import { SaleModule } from './sale.module';
import { Transport } from '@nestjs/common/enums/transport.enum';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(SaleModule, {
    transport: Transport.TCP,
    options: {
      port: 3004
    }
  });
  app.listen(() => console.log('sales management microservice is listening'));
}
bootstrap();