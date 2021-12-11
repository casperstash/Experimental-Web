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
    if (pos => 65){
        gsap.to(".welcome", {
            scrollTrigger: '#bg',
            duration: 1,
            x: pos,
            x: 1200,
            ease: "linear"
        });
    }

    // gsap.to(".textbox1", {
    //     scrollTrigger: '#container',
    //     duration: 3,
    //     x: pos,
    //     x: 990,
    //     ease: "linear"
    // });


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

console.log(pos);
};