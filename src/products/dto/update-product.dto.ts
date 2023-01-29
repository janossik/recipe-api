import { IsNumber, IsString, IsEnum } from 'class-validator';
import { Product, Unit } from '../Product';

export class UpdateProductDTO implements Product {
  @IsNumber({}, { message: 'Id must be a number' })
  id: number;

  @IsString({ message: 'Name must be a string' })
  name: string;

  @IsEnum(Unit)
  unit: Unit | keyof typeof Unit;

  @IsNumber({}, { message: 'amount must be a number' })
  amount: number;

  @IsNumber({}, { message: 'dishId must be a number' })
  dishId: number;
}
