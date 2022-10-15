import { storage } from "../libs/firebase";
import { ref, listAll, getDownloadURL, uploadBytes } from "firebase/storage";
import { IImage } from "./../models/Image";
import { AxiosResponse } from "axios";
import { IProduct } from "./../models/Product";
import api from "./api";

class ProductService {
  getAll(): Promise<AxiosResponse<IProduct[]>> {
    return api.get<IProduct[]>(`/products`);
  }

  retrieve(id: number | string): Promise<AxiosResponse<IProduct>> {
    return api.get<IProduct>(`/products/${id}`);
  }

  remove(id: number | string) {
    return api.delete<IProduct>(`/products/${id}`);
  }

  update(id: number | string, data: IProduct) {
    return api.put<IProduct>(`/products/${id}`, data);
  }

  getProductsByState(state: string) {
    return api.get<IProduct[]>(`/products?state=${state}`);
  }
}

export default ProductService;
