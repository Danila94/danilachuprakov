(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());




const projectTriggers = document.querySelectorAll(".content");

projectTriggers.forEach(addTimeline);

function addTimeline(content, main) {
  const image = content.querySelectorAll(".content__left");
  const text = content.querySelectorAll(".content__right");
  
  
  
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.content',
      start: "center bottom",
      ease: "power2",
      toggleActions: "play none none reverse"
    }
  })
  .from(image, {
   opacity:0,
   duration:.5,
   x:-100,
   delay:.2,
  })
  .from(text, {
    opacity:0,
   duration:.5,
   x:100,
   delay:.2,
  }, "-=0.5");
}

console.clear()



const timeline=gsap.timeline({
  scrollTrigger:{
    trigger: ".main",
    start: "top 45%",
   
    onEnter:(()=>{console.log("Trigger")})
  }
  
})

timeline.from('.top', {
  opacity:0,
  duration:.8,
  y:-100,
  delay:.6,
}).from('.top h1',{
  duration:.6,
  opacity:0,
  x:50,
  
  
})



const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');
const menuCloseItem = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__list--active');
});

menuCloseItem.addEventListener('click', () => {
  menu.classList.remove('menu__list--active');
});

