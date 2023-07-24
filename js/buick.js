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
  // $("#buickFooterImageDesk").srcset="/img/buick/buick-footer-black-desk.png"
  // $("#buickFooterImageLapt").srcset="/img/buick/buick-footer-black-lapt.png"
  // $("#buickFooterImageMob").srcset="/img/buick/buick-footer-black-mob.png"
});

$("#whiteBuickFooter").addEventListener("click", function () {
  clear($("#blackBuickFooter"));
  added($("#whiteBuickFooter"));
  // $("#buickFooterImageDesk").srcset="/img/buick/buick-footer-white-desk.png"
  // $("#buickFooterImageLapt").srcset="/img/buick/buick-footer-white-lapt.png"
  // $("#buickFooterImageMob").srcset="/img/buick/buick-footer-white-mob.png"
});


const added = (el) => el.classList.add("buick__button_active");
const clear = (el) => el.classList.remove("buick__button_active");


//===============================================================================================



// function src () {
//   if (document.documentElement.clientWidth > 993) {
//     $('#buickFooterImageMob').src = "./img/buick/buick-footer-black-desk.png"
//   } else if (document.documentElement.clientWidth > 641) {
//     $('#buickFooterImageMob').src ="./img/buick/buick-footer-black-lapt.png"
//   } else if (document.documentElement.clientWidth > 280) {
//     $('#buickFooterImageMob').src ="./img/buick/buick-footer-black-mob.png"
//   } else {

//   }
// }

// src()



$("#blackBuickFooter").onclick = () => {
if (document.documentElement.clientWidth > 992) {
    $('#buickFooterImageDesk').srcset = "./img/buick/buick-footer-black-desk.png"
  }
  else if (document.documentElement.clientWidth > 640) {
    $('#buickFooterImageLapt').srcset = "./img/buick/buick-footer-black-lapt.png"
  }
  else if (document.documentElement.clientWidth > 279) {
    $('#buickFooterImageMob').srcset = "./img/buick/buick-footer-black-mob.png"
  }
}

$("#whiteBuickFooter").onclick = () => {
if (document.documentElement.clientWidth > 993) {
    $('#buickFooterImageDesk').srcset = "./img/buick/buick-footer-white-desk.png"
  }
  else if (document.documentElement.clientWidth > 640) {
    $('#buickFooterImageLapt').srcset = "./img/buick/buick-footer-white-lapt.png"
  }
  else if (document.documentElement.clientWidth > 279) {
    $('#buickFooterImageMob').srcset = "./img/buick/buick-footer-white-mob.png"
  }
}


