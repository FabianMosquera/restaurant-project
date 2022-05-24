import { initializeApp, FirebaseApp } from "firebase/app";
import { collection, getDocs, DocumentData, getFirestore} from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyCPP9jUPazh436VvJtMD6n5y_YlppcknC8",
  authDomain: "restaurant-project-d0516.firebaseapp.com",
  projectId: "restaurant-project-d0516",
  storageBucket: "restaurant-project-d0516.appspot.com",
  messagingSenderId: "816840780591",
  appId: "1:816840780591:web:033fdb293bd12e8cd28fda",
  measurementId: "G-JEDNP5H9GS"
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();

async function getRestaurante(){
  const resCol = collection(db, 'restaurante');
  const resSnapshot = await getDocs(resCol);
  const resList: DocumentData[] = resSnapshot.docs.map(doc => doc.data());
  return resList;
}

export default getRestaurante