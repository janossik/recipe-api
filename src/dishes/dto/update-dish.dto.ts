import { IsNumber, IsString, IsOptional } from 'class-validator';

export class UpdateDishDTO {
  @IsNumber({}, { message: 'Id must be a number' })
  id: number;

  @IsString({ message: 'Name must be a string' })
  name: string;

  @IsNumber({}, { message: 'Price must be a number' })
  price: number;

  @IsOptional()
  @IsString({ message: 'Description must be a string' })
  description?: string;
}
