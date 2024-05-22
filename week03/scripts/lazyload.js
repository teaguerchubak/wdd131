const date = Date(document.lastModified);
const day = new Date();
var datetime = day.getDate();

document.getElementById("lastModified").innerHTML = date;

document.querySelector("#currentyear").textContent = new Date().getFullYear();