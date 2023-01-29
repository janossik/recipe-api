export interface Product {
  id: number;
  name: string;
  unit: Unit | keyof typeof Unit;
  amount: number;
  dishId: number;
}

export enum Unit {
  kg = 'kg',
  g = 'g',
  l = 'l',
  ml = 'ml',
}
