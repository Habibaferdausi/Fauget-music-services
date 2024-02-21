import { initializeApp } from "firebase/app";


const firebaseConfig = {
  
    apiKey: "AIzaSyDSYXgGNEmo8TDne1LUp2tfzBLnyXjBLNo",
    authDomain: "fauget-music.firebaseapp.com",
    projectId: "fauget-music",
    storageBucket: "fauget-music.appspot.com",
    messagingSenderId: "730189402014",
    appId: "1:730189402014:web:e3df344edae76d8577108f"

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export default app;


