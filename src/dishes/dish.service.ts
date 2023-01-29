import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Dish } from './Dish';
import { CreateDishDTO } from './dto/create-dish.dto';
import { UpdateDishDTO } from './dto/update-dish.dto';

@Injectable()
export class DishService {
  private trackId = 2;
  private dishes: Dish[] = [
    { id: 0, name: 'Pizza', price: 10 },
    { id: 1, name: 'Burger', price: 5 },
  ];
  create(dish: CreateDishDTO) {
    this.dishes.push({ id: this.trackId, ...dish });
    this.trackId += 1;
    return dish;
  }

  getOne(id: number): Dish {
    const dish = this.dishes.find((dish) => dish.id === id);
    if (!dish) throw new HttpException(`Dish by id ${id} not found`, HttpStatus.NOT_FOUND);
    return dish;
  }

  read(): Dish[];
  read(id: number): Dish;
  read(id?: number): Dish | Dish[] {
    if (typeof id === 'number') return this.getOne(id);
    return this.dishes;
  }

  update(dish: UpdateDishDTO) {
    const currentDish = this.getOne(dish.id);
    return currentDish;
  }

  delate(id: number) {
    this.getOne(id);
    this.dishes = this.dishes.filter((dish) => dish.id !== id);
    return this.dishes;
  }
}
