const burgerMenuEL = document.querySelector(".burger-menu");
const crossMenuEL = document.querySelector(".cross-menu");
const navCtaBoxEL = document.querySelector(".nav-cta-box");
const sectionCtaEL = document.querySelector(".section-cta");
const mainEL = document.querySelector(".main");

const mqLarge = window.matchMedia("(min-width: 32rem)");
mqLarge.addEventListener("change", mqHandler);

function mqHandler(e) {
  e.matches
    ? `${(sectionCtaEL.style.visibility =
        "visible")} ${(mainEL.style.visibility = "visible")} `
    : `${(navCtaBoxEL.style.visibility =
        "hidden")} ${(crossMenuEL.style.display =
        "none")} ${(burgerMenuEL.style.display = "block")}`;
}

mqHandler(mqLarge);

const handleClickBurger = function () {
  navCtaBoxEL.style.visibility = "visible";
  mainEL.style.visibility = "hidden";
  sectionCtaEL.style.visibility = "hidden";
  burgerMenuEL.style.display = "none";
  crossMenuEL.style.display = "block";
};
const handleClickCross = function () {
  navCtaBoxEL.style.visibility = "hidden";
  sectionCtaEL.style.visibility = "visible";
  burgerMenuEL.style.display = "block";
  mainEL.style.visibility = "visible";
  crossMenuEL.style.display = "none";
};

burgerMenuEL.addEventListener("click", handleClickBurger);
crossMenuEL.addEventListener("click", handleClickCross);
