const toggleBar = document.querySelector(".toggle");
const Crossicon = document.querySelector(".toggle i");
const menu = document.querySelector(".menu");

toggleBar.addEventListener("click", function(){
 menu.classList.toggle("active");
 Crossicon.classList.toggle("fa-xmark");

})