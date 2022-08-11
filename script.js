const btnBack = document.querySelectorAll(".btn__back");
const btnForward = document.querySelectorAll(".btn__forward");
const headerImageBg = document.querySelectorAll(".header__img-bg");
const headerHeadingText = document.querySelectorAll(".header__heading-text");
const headerDescriptionText = document.querySelectorAll(
  ".header__description-text"
);
const navigationOverlay = document.querySelector(".navigation__overlay");
const navigationBtn = document.querySelector(".navigation__btn");
const navigationBtnLine = document.querySelectorAll(".navigation__btn-line");
const navigationList = document.querySelector(".navigation__list");

let currPos = 0;

const initBoxContent = function (box, className) {
  box.forEach((img) => img.classList.add(className));
  box[0].classList.remove(className);
};

const init = function () {
  initBoxContent(headerImageBg, "header__img-bg-hide");
  initBoxContent(headerHeadingText, "header__heading-text-hide");
  initBoxContent(headerDescriptionText, "header__description-text-hide");
};

init();

const changeBoxContent = function (box, className) {
  box.forEach((img) => img.classList.add(className));
  box[currPos].classList.remove(className);
};

const changeAllContent = function () {
  changeBoxContent(headerImageBg, "header__img-bg-hide");
  changeBoxContent(headerHeadingText, "header__heading-text-hide");
  changeBoxContent(headerDescriptionText, "header__description-text-hide");
};

btnForward.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const btnCondition = e.target.closest(".btn__forward");
    if (!btnCondition) return;

    currPos++;

    if (currPos >= headerImageBg.length) currPos = 0;

    changeAllContent();
  });
});
btnBack.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const btnCondition = e.target.closest(".btn__back");
    if (!btnCondition) return;

    currPos--;

    if (currPos < 0) currPos = headerImageBg.length - 1;

    changeAllContent();
  });
});

navigationBtn.addEventListener("click", function () {
  navigationBtnLine.forEach((line) => line.classList.toggle("active"));
  navigationOverlay.classList.toggle("active");
  navigationList.classList.toggle("active");
});
