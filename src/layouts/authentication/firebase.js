import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuK34nAHSL8JWq-O4ywPuL4K3CCgGP6bk",
  authDomain: "upload-picture-b0dcb.firebaseapp.com",
  projectId: "upload-picture-b0dcb",
  storageBucket: "upload-picture-b0dcb.appspot.com",
  messagingSenderId: "527489475249",
  appId: "1:527489475249:web:97b1cc177319e04017f890"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export default app;