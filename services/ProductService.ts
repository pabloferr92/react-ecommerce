import { storage } from '../libs/firebase';
import { ref, listAll, getDownloadURL, uploadBytes } from 'firebase/storage';
import { IImage } from './../models/Image';
import { AxiosResponse } from 'axios';
import { IProduct } from './../models/Product';
import api from './api';



class ProductService {

    updateLoadImage = async (file: File) => {
        if(['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
    
            let newFile = ref(storage, `images/`);
    
            let upload = await uploadBytes(newFile, file);
            let photoUrl = await getDownloadURL(upload.ref);
    
            return { name: upload.ref.name, url: photoUrl } ;
        } else {
            return new Error('Tipo de arquivo não permitido.');
       }
      
    }

    

    getAll() : Promise<AxiosResponse<IProduct[]>> {

        return api.get<IProduct[]>(`/products`);

    }

    removeProduct() {
        return null;
    }

}

export default ProductService


