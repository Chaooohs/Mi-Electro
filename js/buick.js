//==================================

const $ = (selector) => document.querySelector(selector);

$("#blackBuick").onclick = () => {
  buick.classList.add("buick_black");
  buick.classList.remove("buick_white");
};
$("#whiteBuick").onclick = () => {
  buick.classList.add("buick_white");
  buick.classList.remove("buick_black");
};

$("#blackBuickFooter").onclick = () => {
  $("#buickFooterBlackMob").src = "./img/buick/buick-footer-blakc-mob.png";
};

$("#whiteBuickFooter").onclick = () => {
  $("#buickFooterBlackMob").src = "./img/buick/buick-footer-white-mob.png";
};
