//======================================================

const white = document.getElementById('white');
const black = document.getElementById('black');
const page = document.getElementById('page');
const widthDesktop = window.matchMedia("(min-width: 993px)");
const widthLaptop = window.matchMedia("(min-width:641px)");
const widthMobile = window.matchMedia("(max-width: 640px)");



// white.addEventListener('click', function(widthLaptop){
//     page.style.backgroundImage = "url('../img/buick/buick-black-laptop.png')";
// });

// black.addEventListener('click', function(widthLaptop){
//     page.style.backgroundImage = "url('../img/buick/buick-black-laptop.png')";
// });

white.addEventListener('click', function(widthMobile){
    page.style.backgroundImage = "url('../img/buick/buick-white-mobile.png')";
});

black.addEventListener('click', function(widthMobile){
    page.style.backgroundImage = "url('../img/buick/buick-black-mobile.png')";
});

// desktop -----------------------------------------------------

function buickDesktop (widthDesktop) {
    if (widthDesktop.matches) {
            page.style.backgroundImage = "url('../img/buick/buick-black-desktop.png')";
    }
}
widthDesktop.addListener(buickDesktop);
buickDesktop(widthDesktop);

// laptop -------------------------------------------------------

function buickLaptop (widthLaptop) {
    if (widthLaptop.matches) {
            page.style.backgroundImage = "url('../img/buick/buick-black-laptop.png')";
    }
}
widthLaptop.addListener(buickLaptop);
buickLaptop(widthLaptop);

// mobile ------------------------------------------------------

function buickMobile (widthMobile) {
    if (widthMobile.matches) {
            page.style.backgroundImage = "url('../img/buick/buick-black-mobile.png')";
    }
}
widthMobile.addListener(buickMobile);
buickMobile(widthMobile);

// function buickMobile (widthMobile) {
//     if (widthMobile.matches) {
//         white.addEventListener('click', function () {
//             page.style.backgroundImage = "url('../img/buick/buick-white-desktop.png')";
//         });

//         black.addEventListener('click', function () {
//             page.style.backgroundImage = "url('../img/buick/buick-black-mobile.png')";
//         });
//     }
// }
// widthMobile.addListener(buickMobile);
// buickMobile(widthMobile);









