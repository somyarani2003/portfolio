const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.window.scrollY > 100);
});
/**creating botton click show hide navbar **/
var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");
var links = document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function() {
    this.classList.toggle("click");
    nav.classList.toggle("open");
});

var typed = new Typed(".input", {
    strings: ["Fronted Developer", "Web Developer", "Problem Solving"],
    typedSpeed: 70,
    backSpeed: 55,
    loop: true
});