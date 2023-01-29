import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { AppService } from './app.service';

const fruits = [
  { id: 1, name: 'apple', color: 'red' },
  { id: 2, name: 'banana', color: 'yellow' },
  { id: 3, name: 'orange', color: 'orange' },
];

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getFruits() {
    return { data: fruits };
  }

  @Get(':id')
  getFruit(@Param('id') id: string) {
    return { data: [fruits.find((f) => f.id === Number(id))] };
  }

  @Post()
  createFruit(@Body() fruit: { name: string; color: string }) {
    fruits.push({ id: fruits.length + 1, ...fruit });
    return { message: 'Fruit created', data: [fruits[fruits.length - 1]] };
  }

  @Put()
  updateFruit(@Param() id: number, @Body() fruit: { name: string; color: string }) {
    const index = fruits.findIndex((f) => f.id === id);
    fruits[index] = { id, ...fruit };
    return { message: 'Fruit updated', data: [fruits[index]] };
  }

  @Delete()
  deleteFruit(@Param('id') id: number) {
    const index = fruits.findIndex((f) => f.id === id);
    fruits.splice(index, 1);
    return { message: 'Fruit deleted', data: [fruits[index]] };
  }
}
