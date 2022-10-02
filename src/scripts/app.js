$('.heal__slider').slick({
    prevArrow:`<button type='button' class='slick-prev pull-left'><img src="/src/img/heal/slick_slider/arrow_left.png" ></button>`,
    nextArrow:`<button type='button' class='slick-next pull-right'><img src="/src/img/heal/slick_slider/arrow_right.png" ></button>`,
});
$('.slide-comment').slick({
    prevArrow:`<button type='button' class='slick-prev pull-left'><img src="/src/img/comment/arrow_left.png" ></button>`,
    nextArrow:`<button type='button' class='slick-next pull-right'><img src="/src/img/comment/arrow_right.png" ></button>`,
});

const toggle = document.querySelector(".menu__toggle");
const menu = document.querySelector(".header__menu");
const isShow = "is-show";
const classOpen = "open";
toggle.addEventListener("click", function(){
    menu.classList.toggle(isShow);
    toggle.classList.toggle(classOpen);
});
window.addEventListener('click', function(e){   
    if (!menu.contains(e.target) && !e.target.matches(".menu__toggle")){
        menu.classList.remove(isShow);
        toggle.classList.remove(classOpen);
    } 
});



