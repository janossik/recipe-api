import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';
import { Product } from './Product';

@Injectable()
export class ProductService {
  private trackId = 2;
  private productes: Product[] = [
    { id: 0, name: 'Tomato', unit: 'kg', amount: 1, dishId: 0 },
    { id: 1, name: 'Cheese', unit: 'kg', amount: 10, dishId: 0 },
  ];
  create(product: CreateProductDTO) {
    this.productes.push({ id: this.trackId, ...product });
    this.trackId += 1;
    return product;
  }

  getOne(id: number): Product {
    const product = this.productes.find((product) => product.id === id);
    if (!product) throw new HttpException(`Product by id ${id} not found`, HttpStatus.NOT_FOUND);
    return product;
  }

  read(): readonly Product[];
  read(id: number): Product;
  read(id?: number): Product | readonly Product[] {
    if (typeof id === 'number') return this.getOne(id);
    return this.productes;
  }

  update(product: UpdateProductDTO) {
    const currentProduct = this.getOne(product.id);
    return currentProduct;
  }

  delate(id: number) {
    this.getOne(id);
    this.productes = this.productes.filter((product) => product.id !== id);
    return this.productes;
  }
}
