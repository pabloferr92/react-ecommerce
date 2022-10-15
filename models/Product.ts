import { ICategory } from "./Category";
import { IImage } from "./Image";

export interface IProduct {
  id: number;
  name?: string;
  description: string;
  price: number;
  image: String;
  discount: Number;
  category: ICategory;
}
