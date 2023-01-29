import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { Dish } from './Dish';
import { CreateDishDTO } from './dto/create-dish.dto';
import { UpdateDishDTO } from './dto/update-dish.dto';
@Controller('dishes')
export class DishesController {
  trackId = 2;
  dishes: Dish[] = [
    { id: 0, name: 'Pizza', price: 10 },
    { id: 1, name: 'Burger', price: 5 },
  ];

  @Get()
  readAllDishes() {
    return this.dishes;
  }

  @Get(':id')
  readDishById(@Param('id') id: string) {
    const dish = this.dishes.find((dish) => dish.id === Number(id));
    if (!dish) throw new HttpException(`Dish by id ${id} not found`, HttpStatus.NOT_FOUND);
    return dish;
  }

  @Post('create')
  createDish(@Body() newDish: CreateDishDTO) {
    this.dishes.push({ id: this.trackId, ...newDish });
    this.trackId += 1;
    return newDish;
  }

  @Put('update')
  updateDish(@Body() dish: UpdateDishDTO) {
    const index = this.dishes.findIndex((dish) => dish.id === dish.id);
    if (index === -1) throw new HttpException(`Dish ${dish.id} not found`, HttpStatus.NOT_FOUND);
    this.dishes[index] = dish;
    return dish;
  }

  @Delete(':id')
  deleteDish(@Param('id') id: string) {
    const index = this.dishes.findIndex((dish) => dish.id === Number(id));
    if (index === -1) throw new HttpException(`Dish by id ${id} not found`, HttpStatus.NOT_FOUND);
    this.dishes.splice(index, 1);
    return this.dishes;
  }
}
