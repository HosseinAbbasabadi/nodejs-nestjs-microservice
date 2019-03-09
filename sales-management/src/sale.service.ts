import { Injectable } from '@nestjs/common';
import { Client, Transport, ClientProxy } from '@nestjs/microservices';
import { SaleDto } from './sale-dto';

@Injectable()
export class SaleService {
  sales: [number] = [0];

  @Client({ transport: Transport.TCP, options: { port: 3006 } })
  private client: ClientProxy;

  createSale(saleDto: SaleDto): string {
    this.sales.push(saleDto.saleId);
    this.client.send({ cmd: 'shopper' }, saleDto.userId).subscribe(() => console.log('shopper message successfully send')
      , error => console.log(error)); // i should implement saga pattern here to role back tasks when error occurred
    return 'sale successfully created';
  }

  getAllSales(): [number] {
    return this.sales;
  }
}
