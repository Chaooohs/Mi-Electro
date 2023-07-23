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


const added = (el) => el.classList.add("buick__button_active");

const clear = (el) => el.classList.remove("buick__button_active");


//---------------------------------------------------------------------

const deskWidth = window.matchMedia("(min-width: 993px)");
function desktopScreen(deskWidth) {
  if (deskWidth.matches) {
    $("#blackBuickFooter").onclick = () => {
      clear($("#whiteBuickFooter"));
      added($("#blackBuickFooter"));
      $("#buickFooterImage").src = "/img/buick/buick-footer-black-desk.png";
    };
    $("#whiteBuickFooter").onclick = () => {
      clear($("#blackBuickFooter"));
      added($("#whiteBuickFooter"));
      $("#buickFooterImage").src = "/img/buick/buick-footer-white-desk.png";
    };
  }
  else {
    clear($("#whiteBuickFooter"));
    added($("#blackBuickFooter"));
    $("#buickFooterImage").src = "/img/buick/buick-footer-black-lapt.png";
  }
}
deskWidth.addListener(desktopScreen);
desktopScreen(deskWidth);

//--------------------------------------------------------------------

const laptopWidth = window.matchMedia("(min-width: 641px)");
function laptopScreen(laptopWidth) {
  if (laptopWidth.matches) {
    $("#blackBuickFooter").onclick = () => {
      clear($("#whiteBuickFooter"));
      added($("#blackBuickFooter"));
      $("#buickFooterImage").src = "/img/buick/buick-footer-black-lapt.png";
    };
    $("#whiteBuickFooter").onclick = () => {
      clear($("#blackBuickFooter"));
      added($("#whiteBuickFooter"));
      $("#buickFooterImage").src = "/img/buick/buick-footer-white-lapt.png";
    };
  }
  else {
    $("#blackBuickFooter").onclick = () => {
      clear($("#whiteBuickFooter"));
      added($("#blackBuickFooter"));
      $("#buickFooterImage").src = "/img/buick/buick-footer-black-mob.png";
    };
    $("#whiteBuickFooter").onclick = () => {
      clear($("#blackBuickFooter"));
      added($("#whiteBuickFooter"));
      $("#buickFooterImage").src = "/img/buick/buick-footer-white-mob.png";
    };
  }
}
laptopWidth.addListener(laptopScreen);
laptopScreen(laptopWidth);

//--------------------------------------------------------------------

