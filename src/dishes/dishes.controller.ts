import { Controller, Get } from '@nestjs/common';

@Controller('dishes')
export class DishesController {
  @Get()
  readAll() {
    return [
      { name: 'Pizza', price: 10 },
      { name: 'Burger', price: 5 },
    ];
  }
}
