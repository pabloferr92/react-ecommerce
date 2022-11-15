import { IUSer } from "./User";

export interface IOder {
  id: number;
  user: IUSer;
  created_at: Date;
  total_price: number;
  state: { value: string; display_value: string };
}

/*
  
       "user": "Pablo",
      "created_at": "2022-09-25T02:17:41.569Z",
      "state": "submited",
      "total_price": 18.98,
      "id": 11
  */
