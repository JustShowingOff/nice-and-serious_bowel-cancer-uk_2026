"use strict";

var loops = 3;
var currentLoop = 1;
var container, content, bgExit, loading, timeline, animationTimeline;
var image1, image2, image1Container, image2Container, bubble1, bubble2, bubble3, logo, logos, cover1, cover2, cover3, copy1, copy2, cta


gsap.registerPlugin(SplitText);

var init = function () {
    //Assign All the elements to the element on the page
    container = document.getElementById('container_dc');
    content = document.getElementById('content_dc');
    bgExit = document.getElementById('background_exit_dc');
    loading = document.getElementById('loading_dc');

    image1 = document.getElementById('image1');
    image2 = document.getElementById('image2');
    image1Container = document.getElementById('image1Container');
    image2Container = document.getElementById('image2Container');
    bubble1 = document.getElementById('bubble1');
    bubble2 = document.getElementById('bubble2');
    bubble3 = document.getElementById('bubble3');
    logo = document.getElementById('logo');
    logos = document.getElementById('logos');
    cover1 = document.getElementById('cover1');
    cover2 = document.getElementById('cover2');
    cover3 = document.getElementById('cover3');
    copy1 = document.getElementById('copy1');
    copy2 = document.getElementById('copy2');
    cta = document.getElementById('cta');
    // 


    // 
    timeline = gsap.timeline({
        id: "timeline", repeat: 1, delay: 1, repeatDelay: 3, onRepeat: function () {
            //animationTimeline.play(0)
        }, onStart: function () {
            // animationTimeline.play(0)
        }
    });

    // gsap.set(content,{rotation:0.01});//This can make text look bad!!!!!
    //Bring in listeners i.e. if a user clicks or rollovers
    createAnimation();
    addListeners();

    timeline.timeScale(1.025)
    //animationTimeline.timeScale(1.3)
};


var createAnimation = function () {

    var copy1Split = new SplitText(copy1, { type: "words" })

    var copy2Split = new SplitText(copy2, { type: "lines" })

    gsap.set(image1Container, { x: 0 })
    gsap.set([bubble1, bubble3], { scale: .5, x: 180, y: 14, transformOrigin: "0% 0%" })
    gsap.set(bubble2, { scale: .5, x: 382, y: -42, transformOrigin: "50% 100%" })

   // gsap.set(copy2, { y: -70 })


    gsap.set(logos, { transformOrigin: "66% 50%" })


    //     //END LAYOUT//

    timeline.addLabel("frame1")

        .from(image1Container, { duration: 4.5, x:"+=20", ease: "none" }, "frame1")

        .from(bubble1, { duration: .35, scale: 0, transformOrigin: "0% 0%", ease: "back.out(1.7)" }, "frame1")

        .to(bubble1, { duration: .1, alpha: 0, transformOrigin: "0% 0%", ease: "none" }, "frame1+=2.5")

        .from(bubble3, { duration: .35, scale: 0, transformOrigin: "0% 0%", ease: "back.out(1.7)" }, "frame1+=2.6")

      

       


        .addLabel("frame2")

        .to(image1Container, { duration: 1, x:"-=50%", alpha: 0, ease: "power1.inOut" }, "frame2")

        .from(cover1, { duration: 1, x: "+=643", ease: "power1.inOut" }, "frame2")

        .from(copy1Split.words, { duration: .5, y: "+=50", alpha: 0, ease: "power1.out", stagger: { amount: 0.35 } }, "frame2+=0.75")



        .addLabel("frame3", "+=2")

        .from(cover2, { duration: 1, x: "+=643", ease: "power1.inOut" }, "frame3")

        .from(image2Container, { duration: 1, alpha: 0, x: "+=100", ease: "power1.inOut" }, "frame3+=0.5")

         .from(bubble2, { duration: .35, scale: 0, transformOrigin: "50% 100%", ease: "back.out(1.7)" }, "frame3+=1.25")

        .from(copy2Split.lines, { duration: .5, y: "+=50", alpha: 0, ease: "power1.out", stagger: { amount: 0.35 } }, "frame3+=1.5")



        .addLabel("frame4", "+=2")

        .to([copy2, image2Container], { duration: 1, x: "-=300", alpha: 0, ease: "power1.inOut" }, "frame4")

        .from(cover3, { duration: 1, x: "+=100%", ease: "power1.inOut" }, "frame4")

        .from(cta, { duration: .35, scale: .5, alpha: 0, ease: "power1.out" }, "frame4+=1")

        .from(logos, { duration: .35, scale: .75, alpha: 0, ease: "power1.out" }, "frame4+=1.2")



   // timeline.seek(12).pause();

    gsap.set(loading, { autoAlpha: 0, "display": "none" });
    gsap.set(content, { autoAlpha: 1 });

    console.log(timeline.totalDuration());


};

//Add Event Listeners
var addListeners = function () {
    bgExit.addEventListener('click', bgExitHandler, false);
};

var bgExitHandler = function (e) {
    window.open(window.clickTag)
};

window.onload = function () {
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(init);
    } else {
        // Give older browsers a short moment to render the font
        setTimeout(init, 100);
    }

};

// window.onload = function () {
//     init();
// };







