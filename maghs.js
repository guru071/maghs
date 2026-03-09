import { db } from "./firebase.js";
document.querySelector("button")
  .addEventListener("click", buttonClick);
function buttonClick(){
    sessionStorage.setItem("maghs","true");
    window.location.href="form.html";
}