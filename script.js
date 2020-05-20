// function pageTransition() {
  
//   alert("PageTransition active");
//   var tl = gsap.timeline();
  
//   tl.to("ul.transition li", {duration:.5, scaleY:1, transformOrigin: "bottom left", stagger: .2})
//   tl.to("ul.transition li", {duration:.5, scaleY:0, transformOrigin:"bottom left", stagger: .1, delay: .1})
  
// }

// Function to add and remove the page transition screen
function pageTransition() {

  var tl = gsap.timeline();
  tl.set('.loading-screen', { transformOrigin: "bottom left"});
  tl.to('.loading-screen', { duration: .5, scaleY: 1});
  tl.to('.loading-screen', { duration: .5, scaleY: 0, skewX: 0, transformOrigin: "top left", ease: "power1.out", delay: 1 });
}

function contentAnimation() {
  // alert("Contant animation");
  var tl = gsap.timeline();
  tl.from(".left", {duration:1.5, translateY:50,opacity:0});
  tl.from(".go-back", {duration:1.5, translateY:50,opacity:0});
  window.scrollTo(0,0);
  // tl.to("img", {clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)"})
}


function delay(n) {
  n = n || 2000;
  return new Promise(done => {
    setTimeout(() => {
      done();
    }, n);
  });
}


// barba.init({
  
//   sync: true,
  
//   transitions: [{
//     async leave(data) {
      
//       const done = this.async();
      
//       pageTransition();
//       await delay(1500);
//       done();
//     },
    
//     async beforeEnter(data) {
//       pageTransition();
//     },
    
//     async enter(data) {
//       contentAnimation();
//     },
    
//     async once(data) {
//       contentAnimation();
//     }
    
//   }]
  
// });

barba.hooks.enter(() => {
  window.scrollTo(0, 0);
});

barba.init({
  timeout: 5000,
  transitions: [{
    name: 'opacity-transition',
    leave(data) {
      return gsap.to(data.current.container, {
        opacity: 0
      });
    },
    enter(data) {
      contentAnimation();
      return gsap.from(data.next.container, {
        opacity: 0
      });
    },
    async enter(data) {
      contentAnimation();
    },
    async once(data) {contentAnimation();}
  }]
});

// $(function() {

//   barba.init({

//     sync: true,

//     transitions: [{

//       async leave(data) {
        
//         const done = this.async();
        
//         pageTransition();
//         await delay(1000);
//         done();

//       },

//       async enter(data) {
//         contentAnimation();
//       },

//       async once(data) {
//         contentAnimation();
//       }

//     }]
//   });

// });