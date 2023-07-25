//==============================================================

// contents of delivery
const el = (selector) => document.querySelector(selector);

el("#listBtn").onclick = () => el("#list").classList.toggle("hide-list");


//  mobile menu
const menu = function () {
  el('#underLay').classList.toggle('active');
  el('#mobMenu').classList.toggle('active');
}

const scroll = () => el("body").classList.toggle("no-scroll");

el('#burgerBtn').addEventListener('click', menu);
el('#burgerBtn').addEventListener('click', scroll);

el('#underLay').addEventListener('click', function () {
  menu()
  scroll()
})


// closing the mobile menu after clicking on a link
el('#mobMenu').addEventListener('click', (e) => {
  if (e.target.id === 'mobMenu') return
  e.target = menu()
  e.target = scroll()
})


