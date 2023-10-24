document.addEventListener("DOMContentLoaded", (Event) => {
    let button = document.querySelector(".layout__menu-toggle");
    let fa_bars = document.querySelector(".layout__menu-toggle .fa-bars");
    let fa_xmark = document.querySelector(".layout__menu-toggle .fa-xmark");

    let aside = document.querySelector(".layout__aside");

    button.addEventListener("click", (event) => {
        let visible = document.querySelector(".layout__aside--visible");

        if (!visible) {
            aside.classList.add("layout__aside--visible");
            fa_bars.style.opacity = 0;
            fa_xmark.style.opacity = 1;

        } else {
            aside.classList.remove("layout__aside--visible");
            fa_bars.style.opacity = 1;
            fa_xmark.style.opacity = 0;
        }

    });

});