//==================================

const $ = (selector) => document.querySelector(selector);

$("#blackBuick").onclick = () => {
  $("#whiteBuick").classList.remove("buick__button_active")
  $("#blackBuick").classList.add("buick__button_active")
  buick.classList.add("buick_black");
  buick.classList.remove("buick_white");
};
$("#whiteBuick").onclick = () => {
  $("#blackBuick").classList.remove("buick__button_active")
  $("#whiteBuick").classList.add("buick__button_active")
  buick.classList.add("buick_white");
  buick.classList.remove("buick_black");
};

$("#blackBuickFooter").onclick = () => {
  $("#whiteBuickFooter").classList.remove("buick__button_active")
  $("#blackBuickFooter").classList.add("buick__button_active")
  $("#buickFooterBlackMob").src = "./img/buick/buick-footer-blakc-mob.png";
};

$("#whiteBuickFooter").onclick = () => {
  $("#blackBuickFooter").classList.remove("buick__button_active")
  $("#whiteBuickFooter").classList.add("buick__button_active")
  $("#buickFooterBlackMob").src = "./img/buick/buick-footer-white-mob.png";
};
