// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwIJ9WBU637CjzTtm2ucbg2CV9fdqsV_Q",
  authDomain: "maghs-member.firebaseapp.com",
  projectId: "maghs-member",
  storageBucket: "maghs-member.firebasestorage.app",
  messagingSenderId: "10937169369",
  appId: "1:10937169369:web:667d7d5b2f0cd134f6d5c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if(app){
    console.log("initialized");
}
const db = getFirestore(app);
if(db){
    console.log("db in created");
}
export{db};

function buttonClick(){
    window.location.href="form.html";
}