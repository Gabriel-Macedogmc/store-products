export interface ICreateProductDto {
  id?: string;
  name: string;
  description: string;
  price: number;
  category_id: string;
  createdAt?: Date;
  updatedAt?: Date;
}
