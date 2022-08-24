interface ICategoryId {
    id: number;
}

export interface ICreateProductDto {
    id: string;
    name: string;
    description: string;
    price: number;
    category_id: string;
}
