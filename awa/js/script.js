var pageYOffset;
var lastPageYOffset;

function noscroll() {
  window.scrollTo(0,0);
}

// window.onscroll = function() {
//     var pageYOffset = window.pageYOffset;
//     console.log(pageYOffset);
//     var nav = document.getElementById('hamburger');
//     if ( window.pageYOffset > 710 ) {
//         document.getElementById("hamburger").style.color = "black";
//     } else {
//         document.getElementById("hamburger").style.color = "white";
//     }
// }

// window.onscroll = function() {
//     if (window.pageYOffset > 50) {
//         // document.getElementById("arrow").style.display = "none";
//         document.getElementById("arrow").classList.add("transition");
//     } else {
//         // document.getElementById("arrow").style.display = "block";
//         document.getElementById("arrow").classList.remove("transition");
//     }
// }

function openNav() {
    document.getElementById("myNav").style.display = "block";
    document.querySelector("span").style.display = "none";
    // window.addEventListener('scroll', noscroll);
    lastPageYOffset = window.pageYOffset;
    window.scrollTo(0, window.pageYOffset + 1); /*Scrolling 1 pixel downwards*/
    // console.log("Last PageyOffset" + lastPageYOffset);

}

function closeNav() {
    document.getElementById("myNav").style.display = "none";
    document.querySelector("span").style.display = "block";
    // window.removeEventListener('scroll', noscroll);
    window.scrollTo(0, lastPageYOffset);
}
