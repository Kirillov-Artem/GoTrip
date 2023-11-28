//Carousel

const owl = $(".owl-carousel");

owl.owlCarousel({
    center: true,
    loop: true,
    startPosition: 0,
    margin: 20,
    items: 1,
    responsive: {
        480: {
            startPosition: 1,
            items: 3,
        },

        1200: {
            items: 3,
            margin: 30,
        },
    },
});

$(".slider__btn--prev").click(function () {
    owl.trigger("prev.owl.carousel");
});

$(".slider__btn--next").click(function () {
    owl.trigger("next.owl.carousel");
});

//NAV ICON
const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".nav__toggle");
const menuIcon = document.querySelector(".menu-icon");

document.querySelector(".menu-icon-wrapper").onclick = function () {
    nav.classList.toggle("nav--mobile");
    menuIcon.classList.toggle("menu-icon-active");
    document.body.classList.toggle("no-scroll");
};
