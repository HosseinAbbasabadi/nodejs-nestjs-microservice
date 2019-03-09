import { Controller, Get, Post, Body } from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleDto } from './sale-dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class SaleController {
  constructor(private readonly saleService: SaleService) { }

  @MessagePattern({ cmd: 'createSale' })
  createSale(saleDto: SaleDto): string {
    console.log('sales service create sale conquered');
    return this.saleService.createSale(saleDto);
  }

  @MessagePattern({ cmd: 'getAllSales' })
  getAll(): [number] {
    console.log('sales service get all conquered');
    return this.saleService.getAllSales();
  }
}
