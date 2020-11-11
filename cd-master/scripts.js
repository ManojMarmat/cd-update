const btnMenu = document.querySelector(".menu");
const mobileNav = document.querySelector(".mobileNav");
const findOutMoreBtn = document.querySelectorAll(".findOutMore");
const findOutMoreDiv = document.querySelector("#findOutMoreDiv");
const linkNav = document.querySelectorAll(".linkNav");
let mobileNavStatus = true;

btnMenu.addEventListener("click", function () {
    if (mobileNavStatus) {
        mobileNav.classList.remove('hide');
        mobileNav.classList.add('show');
    } else {
        mobileNav.classList.add('hide');
        mobileNav.classList.remove('show');
    }
    mobileNavStatus = !mobileNavStatus;
});
linkNav.forEach(element => {
    element.addEventListener("click", function () {
        mobileNav.classList.add('hide');
        mobileNav.classList.remove('show');
        mobileNavStatus = true;
    });
});
var once = false;
findOutMoreBtn.forEach(element => {
    element.addEventListener("click", function () {
        findOutMoreDiv.classList.remove('hide');
        const targetPosition = findOutMoreDiv.getBoundingClientRect().top;
        const startPosition = window.pageYOffset;
        const distance = (targetPosition + startPosition) - startPosition - 100;
        const duration = 1000;
        let startTime = null;
        const runup = (currentTime) => {
            if (startTime === null) {
                startTime = currentTime;
            }
            const timeElapsed = currentTime - startTime;
            const move = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, move);
            if (timeElapsed < duration) {
                requestAnimationFrame(runup);
                if(!once){
                    gsap.timeline({
                        scrollTrigger: {
                            trigger: "#a",
                            start: "center center",
                            end: "bottom top",
                            scrub: true,
                            pin : true
                        }
                    })
                    // .from("h3-style-1",{ opacity: 0})
                    .from("#price",{ duration: 5,x : -2000, ease: "slow(0.5, 0.8, true)"})
                    // 1
                    .from(".h3-style-1",{opacity:0,y : 300,duration: 5.5, delay: 2, ease: "slow(0.5, 0.8, true)"})
                    .from(".p-style-1",{opacity: 0,x: 300,duration: 5.5, delay: 2 ,ease: "slow(0.5, 0.8, true)"})
                    .from(".p-style-2",{opacity: 0,x: -300,duration: 5.5, delay: 2 ,ease: "slow(0.5, 0.8, true)"})
                    .from(".p-style-3",{opacity: 0,x: 300,duration: 5.5, delay: 2 ,ease: "slow(0.5, 0.8, true)"})
                    .from(".p-style-4",{opacity: 0,x: -300,duration: 5.5, delay: 2 ,ease: "slow(0.5, 0.8, true)"})
                    .from(".p-style-5",{opacity: 0,x: 300,duration: 5.5, delay: 2 ,ease: "slow(0.5, 0.8, true)"})
                    // 2
                    .from(".h3-style-2",{ opacity:0,y : 100,duration: 5.5, delay: 2 ,ease: "slow(0.5, 0.8, true)"})
                    .from(".p-style2-1",{opacity: 0,x: 100,duration: 5.5, delay: 2 ,ease: "slow(0.5, 0.8, true)"})
                    .from(".p-style2-2",{opacity: 0,x: -100,duration: 5.5, delay: 2, ease: "slow(0.5, 0.8, true)"})
                    // contact
                    .from("#contact",{ opacity:0,duration: 0.5})
                    .from(".home",{ opacity:0,duration: 0.5})
                    
                    once=true;
                }
                
            }
 
            };
        requestAnimationFrame(runup);
    });
});

function goTo(selectedSection) {
    findOutMoreDiv.classList.remove('hide'); 
    const target = document.querySelector(`#${selectedSection}`);
    const targetPosition = target.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = (targetPosition + startPosition) - startPosition - 100;
    const duration = 1000;
    let startTime = null;
    const runup = (currentTime) => {
        if (startTime === null) {
            startTime = currentTime;
        }
        const timeElapsed = currentTime - startTime;
        const move = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, move);
        if (timeElapsed < duration) {
            requestAnimationFrame(runup);
        }
    };
    requestAnimationFrame(runup);
}
function goToCalendly() {
    const link = document.createElement("a");
    link.href="https://calendly.com/curadigital";
    link.setAttribute('visibility', 'hidden');
    link.click();
    return;
}
function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) {
        return c / 2 * t * t + b;
    }
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}

