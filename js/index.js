
let animateActions = "restart complete resume none";
    let startPt = "left 50%";
    let endPt = "center 50%";
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#test-slides-1',
            horizontal: true,
            scroller: "#wheel",
            start: startPt,
            end: endPt,
            toggleActions: animateActions,
            markers: true,
            scrub: 1
        }
    })
    
    tl.fromTo('#test6', 0.4, {top: "50%", opacity: "1"}, {top: "60%", opacity:"0", ease: Power2.easeInOut})
    .fromTo('#test', 0.5, {top: "40%", opacity: "0"}, {top: "50%", opacity:"1", ease: Power2.easeInOut});

    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '#test-slides-2',
            horizontal: true,
            scroller: "#wheel",
            start: startPt,
            end: endPt,
            toggleActions: animateActions,
            scrub: 1
        }
    })
    
    tl2.fromTo('#test', 1, {top: "50%", opacity: "1"}, {top: "60%", opacity:"0", ease: Power2.easeInOut})
    .fromTo('#test2', 1, {top: "40%", opacity: "0"}, {top: "50%", opacity:"1", ease: Power2.easeInOut}, "<");
    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: '#test-slides-3',
            horizontal: true,
            scroller: "#wheel",
            start: startPt,
            end: endPt,
            toggleActions: animateActions,
            scrub: 1
        }
    })
    
    tl3.fromTo('#test2', 1, {top: "50%", opacity: "1"}, {top: "60%", opacity:"0", ease: Power2.easeInOut})
    .fromTo('#test3', 1, {top: "40%", opacity: "0"}, {top: "50%", opacity:"1", ease: Power2.easeInOut}, "<");

    let tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: '#test-slides-4',
            horizontal: true,
            scroller: "#wheel",
            start: startPt,
            end: endPt,
            toggleActions: animateActions,
            scrub: 1
        }
    })
    
    tl4.fromTo('#test3', 1, {top: "50%", opacity: "1"}, {top: "60%", opacity:"0", ease: Power2.easeInOut})
    .fromTo('#test4', 1, {top: "40%", opacity: "0"}, {top: "50%", opacity:"1", ease: Power2.easeInOut}, "<");

    let tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: '#test-slides-5',
            horizontal: true,
            scroller: "#wheel",
            start: startPt,
            end: endPt,
            toggleActions: animateActions,
            scrub: 1
        }
    })
    
    tl5.fromTo('#test4', 1, {top: "50%", opacity: "1"}, {top: "60%", opacity:"0", ease: Power2.easeInOut})
    .fromTo('#test5', 1, {top: "40%", opacity: "0"}, {top: "50%", opacity:"1", ease: Power2.easeInOut}, "<");

    let tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: '#test-slides-6',
            horizontal: true,
            scroller: "#wheel",
            start: startPt,
            end: endPt,
            toggleActions: animateActions,
            scrub: 1
        }
    })
    
    tl6.fromTo('#test5', 1, {top: "50%", opacity: "1"}, {top: "60%", opacity:"0", ease: Power2.easeInOut})
    .fromTo('#test6', 1, {top: "40%", opacity: "0"}, {top: "50%", opacity:"1", ease: Power2.easeInOut}, "<");

   
    window.addEventListener('DOMContentLoaded', (event) => {
        let slidezz = document.getElementsByClassName('slideshow-title');
        for(let i = 0; i < slidezz.length; i++){
            slidezz[i].style.opacity = '0';
        }
        //slidezz[5].style.opacity = '0';
    });

    //imgSlides will refer to the DOM element .mySlides--img
    //it gets declared later on in the click initialization function

    
    let imgSlides;
    let numSlides = document.getElementsByClassName('mySlides--img').length;
    
    //
    
    $('.mySlides--img').each(function(index){
        let switchTL = new TimelineLite();
        index++;
        let slideIndex = '#slide--' + index;
        switchTL.to('.slideshow-wheel', 0.5, {y: 200,opacity: 0})
        .to('.slideshow-title', 0.5, {y: 200,opacity: 0}, "<")
        .to('.slideshow-swipe', 0.5, {y: 200,opacity: 0}, "<")
        .to(slideIndex, 0.5, {opacity: 1, y: 15, zIndex: 5, display: 'block'}).reversed(true);
        this.animation = switchTL;
    })
    $(".mySlides--img").click(function(){
        imgSlides = this;
  this.animation.reversed(!this.animation.reversed());
    });
    $(".slide__back").click(function(){
        imgSlides.animation.reversed(!imgSlides.animation.reversed());
    });
    
    //let tlSlideIn = gsap.to('#')

    let containerz = document.getElementById("wheel");
    let containerWidth;
    let segment; //one slide in the slide carousel
    //////////////////////////////////
    /////Change words on title
    //////////////
    let body = document.querySelector('body');
    let title = document.getElementsByClassName('slideshow-title');

    //slides
    let slidez = document.getElementsByClassName('mySlides');
    let imgGap = 0;
    
    //set up functions
    function setFinal(){
        segment = (containerWidth)/6;
        console.log('segment is', segment);
        //debug
        console.log('scroll width:' ,containerz.scrollWidth);
    }
    function setWheelClone(){
        $('#wheel').ready(function(){
        containerWidth = containerz.scrollWidth;
        
        let clone=$("#wheel").contents().clone();

        console.log('before width: ', containerWidth);
        clone.appendTo("#wheel");
        
        imgGap = slidez[0].getBoundingClientRect().x;
        $('#wheel').scroll(function(){
            let scrollWindowPos = $('#wheel').scrollLeft();
            if(scrollWindowPos >= (containerWidth + imgGap + 5)){
                $('#wheel').scrollLeft(1)
                ScrollTrigger.refresh();
            }
            if(scrollWindowPos <= 0){
                $('#wheel').scrollLeft(containerWidth + imgGap);
            }
        })
        
    })
    };

    setWheelClone();
    setTimeout(setFinal, 1500);
    //setTimeout(scrollSpy, 1505);
    ///////////////////////////////////
    //Check for changes in device width
    ////
    window.addEventListener('resize', setFinal);