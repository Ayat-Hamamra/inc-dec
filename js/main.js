function increases(){
   document.querySelector("p").classList.remove("dec");

   document.querySelector("p").classList.add("inc");
}
document.querySelector(".incBtn").onclick=increases;

function decreases(){
   document.querySelector("p").classList.remove("inc");
   document.querySelector("p").classList.add("dec");
}
document.querySelector(".decBtn").onclick=decreases;