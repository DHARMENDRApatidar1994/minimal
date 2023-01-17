const menu = document.querySelector(".mobile-nav button");
const close = document.querySelector(".ig");
const mobile= document.querySelector(".nav-mobile");

menu.addEventListener("click", function () {
    mobile.style.transform = "translateX(0)"
});

close.addEventListener("click", function () {
    mobile.style.transform = "translateX(100%)"
});
$('.your-class').slick({
    dots: true,
});