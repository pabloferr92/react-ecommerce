import { IOder } from "./Order";
import { IProduct } from "./Product";

export interface ICart {
  product: IProduct;
  quantity: number;
  total_price: number;
  order: IOder;
  id: number;
}
