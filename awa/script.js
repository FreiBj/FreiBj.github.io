function noscroll() {
  window.scrollTo(0,0);
}

window.onscroll = function() {
    console.log(window.pageYOffset);
    var nav = document.getElementById('hamburger');
    if ( window.pageYOffset > 710 ) {
        document.getElementById("hamburger").style.color = "black";
    } else {
        document.getElementById("hamburger").style.color = "white";
    }
}

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
}

function closeNav() {
    document.getElementById("myNav").style.display = "none";
    document.querySelector("span").style.display = "block";
    // window.removeEventListener('scroll', noscroll);
}
