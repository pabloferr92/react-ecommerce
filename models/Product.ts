import { IImage } from "./Image";

export interface IProduct {

    id: number;
    name : string;
    description: string;
    price : number;
    image: IImage;
  
}