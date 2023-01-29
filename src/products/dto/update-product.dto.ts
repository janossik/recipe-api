import { IsNumber, IsString, IsEnum } from 'class-validator';
import { Product } from '../Product';

export class UpdateProductDTO implements Product {
  @IsNumber({}, { message: 'Id must be a number' })
  id: number;

  @IsString({ message: 'Name must be a string' })
  name: string;

  @IsEnum(['kg', 'g', 'l', 'ml', 'unit'], { message: 'Unit must be a string' })
  unit: 'kg' | 'g' | 'l' | 'ml' | 'unit';

  @IsNumber({}, { message: 'amount must be a number' })
  amount: number;

  @IsNumber({}, { message: 'dishId must be a number' })
  dishId: number;
}
