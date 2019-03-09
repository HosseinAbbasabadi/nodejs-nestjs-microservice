import { Injectable } from '@nestjs/common';
import { Transport, ClientProxy, Client } from '@nestjs/microservices';
import { SaleDto } from './sale-dto';

@Injectable()
export class AppService {

  @Client({ transport: Transport.TCP, options: { port: 3004 } })
  private client: ClientProxy;

  public createSale(command: SaleDto) {
    return this.client.send({cmd: 'createSale'}, command);
  }

  public getAllSales() {
    return this.client.send({cmd: 'getAllSales'}, '');
  }
}
