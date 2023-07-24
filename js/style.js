//==============================================================

// contents of delivery
const el = (selector) => document.querySelector(selector);

el("#listBtn").onclick = () => el("#list").classList.toggle("hide-list");


// navbar mobile
const menu = () => el('#mobMenu').classList.toggle('active')
const scroll = () => el('body').classList.toggle('no-scroll')


el('#burgerBtn').addEventListener('click', menu)
el('#burgerBtn').addEventListener('click', scroll)
