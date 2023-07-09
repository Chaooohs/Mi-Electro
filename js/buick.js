//==================================

// const radio = document.getElementsByName('buick');
const radio = document.querySelectorAll(".buick__input");
const buick = document.querySelector("#buick");

// for (let i = 0; i<radio.length; i++) {
//   radio[i].onchange = testRadio;
// }

for (colorBuickValue of radio) {
  colorBuickValue.onchange = testRadio;
}

function testRadio() {
  // console.log(this.value);
  if (this.value === "black") {
    buick.classList.add("buick_black");
    buick.classList.remove("buick_white");
  } 
  else {
    buick.classList.add("buick_white");
    buick.classList.remove("buick_black");
  }
}
