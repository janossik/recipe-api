import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { DishService } from './dish.service';
import { CreateDishDTO } from './dto/create-dish.dto';
import { UpdateDishDTO } from './dto/update-dish.dto';
@Controller('dishes')
export class DishesController {
  constructor(private readonly dishService: DishService) {}

  @Get()
  readAllDishes() {
    return this.dishService.read();
  }

  @Get(':id')
  readDishById(@Param('id', ParseIntPipe) id: number) {
    return this.dishService.read(id);
  }

  @Post('create')
  createDish(@Body() dish: CreateDishDTO) {
    return this.dishService.create(dish);
  }

  @Put('update')
  updateDish(@Body() dish: UpdateDishDTO) {
    return this.dishService.update(dish);
  }

  @Delete(':id')
  deleteDish(@Param('id', ParseIntPipe) id: number) {
    return this.dishService.delate(id);
  }
}
