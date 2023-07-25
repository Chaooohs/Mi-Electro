//==============================================================

// contents of delivery
const el = (selector) => document.querySelector(selector);

el("#listBtn").onclick = () => el("#list").classList.toggle("hide-list");

//  mobile menu
const menu = () => el("#mobMenu").classList.toggle("active");
const scroll = () => el("body").classList.toggle("no-scroll");
const underline = () => el("#underLay").classList.toggle("under");

el("#burgerBtn").addEventListener("click", menu);
el("#burgerBtn").addEventListener("click", scroll);
el("#burgerBtn").addEventListener("click", underline);

el("#underLay").addEventListener("click", menu);
el("#underLay").addEventListener("click", scroll);
el("#underLay").addEventListener("click", underline);

// closing the mobile menu after clicking on a link
el("#mobMenu").addEventListener("click", (e) => {
  if (e.target.id === "mobMenu") return;
  e.target = menu();
  e.target = scroll();
  e.target = underline();
});

const eee = function (e) {
  el("#mobMenu").style.background = "#350000"
  el("#mobMenu").addEventListener('click', (e) => e.target.style.color = 'white')
}

eee()
