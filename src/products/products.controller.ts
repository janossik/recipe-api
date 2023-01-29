import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';
import { DishService } from 'src/dishes/dish.service';
@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService, private readonly dishService: DishService) {}

  @Get()
  readAllProductes() {
    return this.productService.read();
  }

  @Get(':id')
  readProductById(@Param('id', ParseIntPipe) id: number) {
    return this.productService.read(id);
  }

  @Post('create')
  createProduct(@Body() product: CreateProductDTO) {
    this.dishService.read(product.dishId);
    return this.productService.create(product);
  }

  @Put('update')
  updateProduct(@Body() product: UpdateProductDTO) {
    this.dishService.read(product.dishId);
    return this.productService.update(product);
  }

  @Delete(':id')
  deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productService.delate(id);
  }
}
