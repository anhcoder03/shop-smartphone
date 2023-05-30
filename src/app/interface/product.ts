export interface IProduct {
  _id: string;
  productName: string;
  price: number;
  image: string;
  description: string;
  categoryId: string;
  success?: boolean;
  message?: string;
}
