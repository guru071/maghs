import { db } from "./firebase.js";
import {
    doc,
    getDoc,
    setDoc,
    collection,
    query,
    where,
    getDocs,
    Timestamp
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";
async function insert() {
    const docRef = doc(db, "maghs");
}
if(sessionStorage.getItem("maghs")==="true"){
 
}else{
    window.location.href = "maghs.html";
}