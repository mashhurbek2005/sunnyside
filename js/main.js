var elMenuBtn = document.querySelector(".js-menu-btn");
var elHeaderOpen = document.querySelector(".site-header");

elMenuBtn.addEventListener("click", function(){
    elHeaderOpen.classList.toggle("site-header-menu-open")
})