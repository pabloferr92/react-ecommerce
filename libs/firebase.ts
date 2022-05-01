import {initializeApp} from 'firebase/app'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyDtpv23z8GcWb0I3w5LpQ9rIzkq-vuqZS0",
    authDomain: "delivery-app-e4dc1.firebaseapp.com",
    projectId: "delivery-app-e4dc1",
    storageBucket: "delivery-app-e4dc1.appspot.com",
    messagingSenderId: "881670337113",
    appId: "1:881670337113:web:a9fe5e40f4aec4ebf13748",
    measurementId: "G-RJ6HPER750"
  };

const firebaseApp = initializeApp(firebaseConfig);
 export const storage = getStorage(firebaseApp);