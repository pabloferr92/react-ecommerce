import { getStorage, ref, listAll, getDownloadURL  } from "firebase/storage";
import { storage } from './../libs/firebase';



class StorageService {
    
    listAll(){

        // Create a reference under which you want to list
        const listRef = ref(storage, 'product-images/');
        
        // Find all the prefixes and items.
        listAll(listRef)
          .then((res) => {
            res.prefixes.forEach((folderRef) => {
              // All the prefixes under listRef.
              // You may call listAll() recursively on them.
            });
            res.items.forEach((itemRef) => {
              console.log("storage " + itemRef);
            });
          }).catch((error) => {
            // Uh-oh, an error occurred!
          });

      getDownloadURL(ref(storage, 'product-images/heineken.jpg')).then(
          (url)=>{
            console.log("Url " + url)
          }
      )


    }

}

export default StorageService;