gsap.registerPlugin(ScrollTrigger);
//on Scroll animations
// const video1 = document.querySelector('#video-controller');

// video1.pause = true;

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


    gsap.to("#container", {
        scrollTrigger: '#container',
        duration: 3,
        opacity: 1.0,
    });

// console.log(pos);
};

    //scroll textbox
    
    gsap.to(".textbox1", {
        scrollTrigger: '#container2',
        duration: 4,
        x: 2100,
        opacity: 1.0,
        repeat: -1,
        ease: Sine
    });

    gsap.to(".textbox2", {
        scrollTrigger: '#container2',
        duration: 4,
        x: -2100,
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

    const contract = document.querySelector('.p7');

    let trigger = contract.style.y;

    console.log(trigger);

    //scrolling contract
    gsap.to(".p7", {
        scrollTrigger: '#container',
        duration: 20,
        y: -36200,
        ease: Sine,  
    });

    var images = document.querySelectorAll("img"),
    delayTime = 0,
    animationTime = 0.5,
    tl = new TimelineMax({
        repeat:-1, 
        delay:animationTime + delayTime, 
        repeatDelay:delayTime
    });

    TweenMax.set(images, {
        autoAlpha:0 
    });

    TweenMax.to(images[0], animationTime, {
        scrollTrigger: '#container',
        autoAlpha:1 
    });

    for (var i = 1; i < images.length; i++) {
        tl.to(images[i], animationTime, {
            autoAlpha:1, 
            scale:1
        }, 
        (i-1) * (animationTime + delayTime));
        tl.set(images[i-1], {autoAlpha:0});
        console.log(i);
    }