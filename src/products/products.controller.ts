import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';
import { Product } from './Product';

@Controller('products')
export class ProductsController {
  trackId = 1;
  products: Product[] = [
    { id: 0, name: 'Tomato', unit: 'kg', amount: 1, dishId: 0 },
    { id: 1, name: 'Cheese', unit: 'kg', amount: 10, dishId: 0 },
  ];

  @Get()
  readAllproducts() {
    return this.products;
  }

  @Get(':id')
  readProductById(@Param('id') id: string) {
    const product = this.products.find((product) => product.id === Number(id));
    if (!product) throw new HttpException(`Product by id ${id} not found`, HttpStatus.NOT_FOUND);
    return product;
  }

  @Post('create')
  createProduct(@Body() newProduct: CreateProductDTO) {
    this.products.push({ id: this.trackId, ...newProduct });
    this.trackId += 1;
    return newProduct;
  }

  @Put('update')
  updateProduct(@Body() product: UpdateProductDTO) {
    const index = this.products.findIndex((product) => product.id === product.id);
    if (index === -1) throw new HttpException(`Product ${product.id} not found`, HttpStatus.NOT_FOUND);
    this.products[index] = product;
    return product;
  }

  @Delete(':id')
  deleteProduct(@Param('id', ParseIntPipe) id: number) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) throw new HttpException(`Product by id ${id} not found`, HttpStatus.NOT_FOUND);
    this.products.splice(index, 1);
    return this.products;
  }
}
