gsap.registerPlugin(ScrollTrigger);

//on Scroll animations
window.onscroll = () => {
    let pos = window.scrollY;
    gsap.to("h1", {
        scrollTrigger: '#container',
        duration: 1,
        y: pos,
        y: 990,
        opacity: 0.0,
        ease: "linear"
    });

    gsap.to("#logo", {
        scrollTrigger: '#container',
        duration: 1,
        y: pos,
        y: 990,
        opacity: 0.0,
        ease: "linear"
    });

    gsap.to("#container", {
        scrollTrigger: '#container',
        duration: 3,
        autoAlpha:1
    });

    //welcome typewriter effect and show on screen
    if (pos => 75){
        gsap.to(".welcome", {
            scrollTrigger: '#bg',
            duration: 1,
            x: pos,
            x: 1200,
            ease: "linear"
        });
        
        //type writer effect
        gsap.to(".p3", {
            scrollTrigger: '#bg',
            duration: 1,
            text: "Welcome_",
            opacity: 1.0,
            ease: Linear.easeNone
        });

        
    }

    //going back
    if (pos <= 150 || pos == 0){
        gsap.to("h1", {
            scrollTrigger: '#bg',
            duration: 1,
            y: 990,
            y: 0,
            opacity: 1.0,
            ease: "linear"
        });

        gsap.to("#logo", {
            scrollTrigger: '#bg',
            duration: 3,
            opacity: 1.0,
            ease:"linear"
        });

        gsap.to("#logo", {
            scrollTrigger: '#bg',
            duration: 1,
            y: 990,
            y: 0,
            opacity: 1.0,
            ease: "linear"
        });
    };

// console.log(pos);
};

    //scroll textbox
    gsap.to(".p4", {
        scrollTrigger: '#container',
        duration: 4,
        x: 2200,
        repeat: -1,
        yoyo: true,
        ease: Sine
    });

    gsap.to(".p5", {
        scrollTrigger: '#container',
        duration: 4,
        x: -2130,
        repeat: -1,
        yoyo: true,
        ease: Sine
    });

    gsap.to(".p10", {
        scrollTrigger: '#container',
        duration: 5,
        x: -2200,
        repeat: -1,
        yoyo: true,
        ease: Sine
    });

    gsap.to(".p11", {
        scrollTrigger: '#container',
        duration: 5,
        x: 1800,
        repeat: -1,
        yoyo: true,
        ease: Sine
    });

    //error  & poem reveal
    gsap.to(".textbox3", {
        scrollTrigger: '#container2',
        duration: 2,
        opacity: 1.0,
        repeat: -1,
        yoyo: true,
        ease: Sine
    });

    gsap.to(".textbox6", {
        scrollTrigger: '#container2',
        duration: 3,
        opacity: 1.0,
        repeat: -1,
        yoyo: true,
        ease: Sine
    });

    const contract = document.querySelector('.p7');
    // const video = document.querySelector('#video-controller');
    const important = document.querySelector('.p9');
    const circle = document.querySelector('.circle');
    const button = document.querySelector('#button');

    let trigger = contract.style.y;

    console.log(trigger);

    //scrolling contract
    gsap.to(".p7", {
        scrollTrigger: '#container',
        duration: 20,
        y: -36200,
        ease: Sine,  
    });

    //button on click function
    function turnRed(){
        important.style.color = "red"
    };

    // var images = document.querySelectorAll("img"),

    // delayTime = 0,
    // animationTime = 1,
    // tl = new TimelineMax({
    //     repeat:-1, 
    //     delay:animationTime + delayTime, 
    //     // repeatDelay:delayTime
    // });

    // TweenMax.set(images, {
    //     autoAlpha:0 
    // });

    // TweenMax.to(images[0], animationTime, {
    //     scrollTrigger: '#container',
    //     autoAlpha:1 
    // });

    // for (var i = 1; i < images.length; i++) {
    //     tl.to(images[i], animationTime, {
    //         autoAlpha:1, 

    //     }, 
    //     (i-1) * (animationTime + delayTime));
        
    //     tl.set(images[i-1], {autoAlpha:0});
    // };
    //     if (i === images[1]) {
    //         gsap.to(".info", {
    //             duration: 5,
    //             autoAlpha:1,
    //             ease: "linear",  
    //         });
    //     } else {
    //         gsap.to(".info", {
    //             duration: 3,
    //             autoAlpha:0,
    //             ease: "linear",  
    //         });
    // };

//moving the image though scrolling (holy crap it took me sooo long to figure this out, just did the mouse
var images = document.querySelectorAll("img");

//set all images opacity to 0
TweenMax.set(images, {
    autoAlpha:0 
});

//set 1st images opacity to 1
TweenMax.set(images[1], {
    autoAlpha:1 
});

var imageIndex = 0;
var scrX, scrY;
var mouX, mouY;
var isMouseIn= false;
var nextImageIndex;


gsap.to(".info", {
    scrolltrigger: "#container",
    duration: 3,
    opacity: 1.0,
    ease: "linear"
});

//thank you stackoverflow for teaching me how to use scrollTo but this stores scroll coordinates to x, y
function noScroll() {
    window.scrollTo(scrX, scrY);
}

//when mouse enters circle update the x, y and stop the scrolling as long as youre within the circle
circle.addEventListener("mouseenter", function(e){

    TweenMax.set("#logo", {
        duration: 1,
        x: - 100, 
    });

    scrX = window.scrollX;
    scrY = window.scrollY;
    mouX = window.pageX
    mouY = window.pageY

    //info box
    if (imageIndex == 0){
        gsap.to(".info", {
            duration: 3,
            opacity: 1.0,
            ease: "linear"
        });
    } else { 
        gsap.to(".info", {
            duration: 1,
            opacity: 0,
            ease: "linear"
        });
    };

    if (imageIndex != 0 && imageIndex != 11 && imageIndex != 10 && imageIndex != 9){
        TweenMax.set(".info2", {
            duration: 3,
            autoAlpha: 1
        });
    } else { 
        TweenMax.set(".info2", {
            duration: 1,
            autoAlpha: 0
        });
    };

    if (imageIndex == 11 || imageIndex == 10 || imageIndex == 9){
        TweenMax.set(".info3", {
            duration: 3,
            autoAlpha: 1
        });
    } else { 
        TweenMax.set(".info3", {
            duration: 1,
            autoAlpha: 0
        });
    };

    //mouse feature
    if (e.mouX > 0){
        nextImageIndex = (imageIndex + 2) % images.length;
    } else {
        nextImageIndex = (imageIndex -2 + images.length) % images.length;

        TweenMax.set(images[1], {
            autoAlpha:0
        });

        TweenMax.set(images[imageIndex], {
            autoAlpha:0,
            ease: "linear" 
        });

        TweenMax.set(images[nextImageIndex], {
            autoAlpha:1,
            ease: "linear"
        });
        imageIndex = nextImageIndex;
    };

    console.log(imageIndex);
    window.addEventListener("scroll", noScroll);
    isMouseIn = true;
});

//after you leave
circle.addEventListener("mouseleave", function(){
    isMouseIn = false;

    
    TweenMax.set("#logo", {
        duration: 1,
        x: 0, 
    });
    
    window.removeEventListener("scroll", noScroll);
});

//what happens when we scroll wheel within the circle
circle.addEventListener("wheel", function(e){
    

    TweenMax.set(images[imageIndex], {
        duration: 1,
        autoAlpha:0,
        ease: "linear" 
    });

    //tracking the scrollwheels up and down; up forward images. down backward;
    if(e.deltaY > 0){
        nextImageIndex = (imageIndex + 1) % images.length;
    } else {
        nextImageIndex = (imageIndex -1 + images.length) % images.length;

    //set the technically current images alpha to 0
    TweenMax.set(images[imageIndex], {
        duration: 1,
        autoAlpha:0,
        ease: "linear" 
    });

    //sets the next image alpha to 1
    TweenMax.set(images[nextImageIndex], {
        duration: 1,
        autoAlpha:1,
        ease: "linear"
    });
    //change to the new image
    imageIndex = nextImageIndex;
    };
});


console.log(imageIndex);

// video.onloadeddata = function (){
//     let videoDuration = video.duration;
//     console.log("Loaded")

//     gsap.to(video, 1, {
//         currentTime: videoDuration,
//         overwrite: true,
//         scrollTrigger:{
//             trigger: "#container",
//             top: "top top",
//             end: "bottom top",
//             markers: true,
//             pin: true,
//             scrub: true
//         }
//     });

//     if (videoDuration == 2){
//     }
// };