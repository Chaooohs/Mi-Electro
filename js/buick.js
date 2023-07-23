//==================================

const radio = document.querySelectorAll(".buick__input");
const buick = document.querySelector("#buick");

for (let i = 0; i<radio.length; i++) {
  radio[i].onchange = testRadio;
}

function testRadio() {
  if (this.value === "black") {
    buick.classList.add("buick_black");
    buick.classList.remove("buick_white");
  } 
  else {
    buick.classList.add("buick_white");
    buick.classList.remove("buick_black");
  }
}

const $ = (selector) => document.querySelector(selector)

$("#blackBuickFooter").onclick = () => {
  $('#buickFooterBlackMob').src = ('./img/buick/buick-footer-blakc-mob.png')
}

$('#whiteBuickFooter').onclick = () => {
  $('#buickFooterBlackMob').src = ('./img/buick/buick-footer-white-mob.png')
}



