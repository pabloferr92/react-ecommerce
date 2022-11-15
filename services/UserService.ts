import { AxiosResponse } from "axios";
import { IUSer } from "../models/User";
import api from "./api";

class UserService {
  getAll(): Promise<AxiosResponse<IUSer[]>> {
    return api.get<IUSer[]>(`/users`);
  }

  retrieve(id: number | string): Promise<AxiosResponse<IUSer>> {
    return api.get<IUSer>(`/users/${id}`);
  }

  remove(id: number | string) {
    return api.delete<IUSer>(`/users/${id}`);
  }

  update(id: number | string, data: IUSer) {
    return api.put<IUSer>(`/users/${id}`, data);
  }
}

export default UserService;
