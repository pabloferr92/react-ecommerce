import { ICart } from "../../mobile/smart-delivery/src/interfaces/order";
import { AxiosResponse } from "axios";
import api from "./api";
import { ICart } from "../models/Cart";

class CartItemService {
  getAll(): Promise<AxiosResponse<ICart[]>> {
    return api.get<ICart[]>(`/carts`);
  }

  retrieve(id: number | string): Promise<AxiosResponse<ICart>> {
    return api.get<ICart>(`/carts/${id}`);
  }

  remove(id: number | string) {
    return api.delete<ICart>(`/carts/${id}`);
  }

  update(id: number | string, data: ICart) {
    return api.put<ICart>(`/carts/${id}`, data);
  }

  getCartByOrder(order: number) {
    return api.get<ICart[]>(`/carts?order=${order}`);
  }
}

export default CartItemService;
