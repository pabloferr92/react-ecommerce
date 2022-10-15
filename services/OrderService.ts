import { IOrder } from "./../../mobile/smart-delivery/src/interfaces/order";
import { storage } from "../libs/firebase";
import { ref, listAll, getDownloadURL, uploadBytes } from "firebase/storage";
import { IImage } from "../models/Image";
import { AxiosResponse } from "axios";
import { IProduct } from "../models/Product";
import api from "./api";

class OrderService {
  getAll(): Promise<AxiosResponse<IOrder[]>> {
    return api.get<IOrder[]>(`/orders`);
  }

  retrieve(id: number | string): Promise<AxiosResponse<IOrder>> {
    return api.get<IOrder>(`/orders/${id}`);
  }

  remove(id: number | string) {
    return api.delete<IOrder>(`/orders/${id}`);
  }

  update(id: number | string, data: IOrder) {
    return api.put<IOrder>(`/orders/${id}`, data);
  }

  getOrdersByState(state: string) {
    return api.get<IOrder[]>(`/orders?state=${state}`);
  }
}

export default OrderService;
