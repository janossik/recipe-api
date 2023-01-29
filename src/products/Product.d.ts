export interface Product {
  id: number;
  name: string;
  unit: 'kg' | 'g' | 'l' | 'ml' | 'unit';
  amount: number;
  dishId: number;
}
