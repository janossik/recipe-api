import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DishService } from './dishes/dish.service';
import { DishesController } from './dishes/dishes.controller';
import { ProductService } from './products/product.service';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [],
  controllers: [DishesController, AppController, ProductsController],
  providers: [AppService, DishService, ProductService],
})
export class AppModule {}
