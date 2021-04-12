export interface Item<T = any> {
  id: number;
  leaf?: boolean;
  parentId: number;
  name: string;
  description: string;
  favoriteCoffee: string;
  age: number;
}
