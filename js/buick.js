//==================================

const $ = (selector) => document.querySelector(selector);

$("#blackBuick").addEventListener("click", function () {
  buick.classList.remove("buick_white");
  buick.classList.add("buick_black");
  clear($("#whiteBuick"));
  added($("#blackBuick"));
});

$("#whiteBuick").addEventListener("click", function () {
  buick.classList.remove("buick_black");
  buick.classList.add("buick_white");
  clear($("#blackBuick"));
  added($("#whiteBuick"));
});

$("#blackBuickFooter").addEventListener("click", function () {
  clear($("#whiteBuickFooter"));
  added($("#blackBuickFooter"));
  $("#buickFooterImageDesk").srcset="/img/buick/buick-footer-black-desk.png"
  $("#buickFooterImageLapt").srcset="/img/buick/buick-footer-black-lapt.png"
  $("#buickFooterImageMob").srcset="/img/buick/buick-footer-black-mob.png"
});

$("#whiteBuickFooter").addEventListener("click", function () {
  clear($("#blackBuickFooter"));
  added($("#whiteBuickFooter"));
  $("#buickFooterImageDesk").srcset="/img/buick/buick-footer-white-desk.png"
  $("#buickFooterImageLapt").srcset="/img/buick/buick-footer-white-lapt.png"
  $("#buickFooterImageMob").srcset="/img/buick/buick-footer-white-mob.png"
});


const added = (el) => el.classList.add("buick__button_active");
const clear = (el) => el.classList.remove("buick__button_active");


//===============================================================================================


