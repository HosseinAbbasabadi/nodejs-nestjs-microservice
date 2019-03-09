import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { SaleDto } from './sale-dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post('/api/sales')
  create(@Body() command: SaleDto) {
    return this.appService.createSale(command);
  }

  @Get('/api/sales')
  getAll() {
    return this.appService.getAllSales();
  }
}
