///variables declaration
let swipeTL = new TimelineLite();
let slideIndex = 1;
let slideClicked = '.mySlides--img--' + slideIndex; 
let posX = 0;
//////

function getPositionFromCenter(){
  slideClicked = '.mySlides--img--' + slideIndex;
  try{
    posX = (window.innerWidth/2) - document.getElementsByClassName(slideClicked.slice(1))[0].getBoundingClientRect().x ;
  }catch(err){
    console.log(err);
  }
  return posX;
}
function setupHome(){
  //imgSlides will refer to the DOM element .mySlides--img
    //it gets declared later on in the click initialization function

    
    let imgSlides;
    let numSlides = document.getElementsByClassName('mySlides--img').length;

    //let tlSlideIn = gsap.to('#')

    let containerz = document.getElementById("wheel");
    let containerWidth;
    let segment; //one slide in the slide carousel
    //////////////////////////////////
    /////Change words on title
    //////////////
    let body = document.querySelector('body');

    //slides
    let slidez = document.getElementsByClassName('mySlides');
    let imgGap = 0;
    
    //set up functions
    window.addEventListener('DOMContentLoaded', function(){
        swipeTL.to('.slideshow-swipe', 0.1, {opacity: 1})
        .to('.slideshow-swipe', 2, {x: "200%", color: '#fff', repeat: 2, yoyo: true})
        .to('.slideshow-swipe', 1, {opacity: 0, autoAlpha:0});
    })
    document.getElementsByClassName('slideshow-adjust')[0].addEventListener("click", function(){
        //let colorsDisplay = document.getElementById('colors').style.display;
        if(document.getElementById('colors').style.display == 'none' || document.getElementById('colors').style.display == ''){
            document.getElementById('colors').style.display = 'block';
        }else{
            document.getElementById('colors').style.display = 'none';
        }
    })
    $("#wheel").click(function(){
        if(swipeTL.isActive()){
        swipeTL.seek(swipeTL.endTime());
    }
    })
    let currentBG = 'light__mode';
    function setCurrent(newMode){
        if(newMode !== currentBG){
            document.body.classList.toggle(currentBG);
            document.body.classList.toggle(newMode);
            currentBG = newMode;
        }
        if(newMode == 'light__mode' || newMode == 'yellow__mode'){
            $('.slide').each(function(){
                this.style.color = '#000';
            })
            $('.slide__toggle:link').each(function(){
                this.style.color = '#000';
            })
            $('.slide__toggle:visited').each(function(){
                this.style.color = '#000';
            })
            document.getElementById('slideshow-title').style.color = '#000';
        }else {
            $('.slide').each(function(){
                this.style.color = '#fff';
            })
            $('.slide__toggle:link').each(function(){
                this.style.color = '#fff';
            })
            $('.slide__toggle:visited').each(function(){
                this.style.color = '#fff';
            })
            document.getElementById('slideshow-title').style.color = '#fff';
        }
    }
    document.getElementById('red__choice').addEventListener('click', function(){
        console.log('red');
        setCurrent('red__mode');
    });
    document.getElementById('yellow__choice').addEventListener('click', function(){
        setCurrent('yellow__mode');
    });
    document.getElementById('blue__choice').addEventListener('click', function(){
        setCurrent('blue__mode');
    });
    document.getElementById('dark__choice').addEventListener('click', function(){
        setCurrent('dark__mode');
    });
    document.getElementById('light__choice').addEventListener('click', function(){
        setCurrent('light__mode');
    });
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
        let extraSlide = $('#wheel').children()[6].children[0].children[0];
            extraSlide.classList.toggle('mySlides--img--1');
            extraSlide.classList.toggle('mySlides--img--7');
        ///////////////////////////////////////////
        
        $(".mySlides--img").click(function(){
            slideIndex = $('.mySlides--img').index($(this)) + 1;
        });
        /////////////////////////////////////////
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
    let title = document.getElementById('slideshow-title');
    function scrollSpy(){
        containerz.addEventListener('scroll', function(e){
            if(containerz.scrollLeft > 0 && containerz.scrollLeft <= segment){
                title.innerText = 'Bonjour';
            }
            if(containerz.scrollLeft > segment && containerz.scrollLeft <= (segment*2)){
                title.innerText = 'Benjamin';
            }
            if(containerz.scrollLeft > (segment*2) && containerz.scrollLeft <= (segment*3)){
                title.innerText = 'Romani';
            }
            if(containerz.scrollLeft > (segment*3) && containerz.scrollLeft <= (segment*4)){
                title.innerText = "Marotta";
            }
            if(containerz.scrollLeft > (segment*4) && containerz.scrollLeft <= (segment*5)){
                title.innerText = "Eulalio";
            }
            if(containerz.scrollLeft > (segment*5)){
                title.innerText = "Angeioletto";
            }

        })
    };
    setWheelClone();
    setTimeout(setFinal, 1500);
    setTimeout(scrollSpy, 1505);
    ///////////////////////////////////
    //Check for changes in device width
    ////
    window.addEventListener('resize', setFinal);
}
function pageTransition(){
  let xShift = getPositionFromCenter();
  var tl = gsap.timeline();
  tl.to(slideClicked, 0.4, {x:xShift, xPercent:-50, ease: Power2.easeIn})
}
function contentAnimation(){
  var tl = gsap.timeline();
  tl.to('.slide__figure-title', 0.3, {fontSize:"12rem"})
  .to('.slide__figure-title', 0.6, {fontSize:"7rem", left: "50%", top: "30%", transform:"translate(-50%, -50%)"})
  .to('.slide__figure-img', 0.7, {y: window.innerHeight/2, yPercent: -50}, "<")
}
function homeAnimation(){
  swipeTL.to('.slideshow-swipe', 2, {x: "200%", color: '#fff', repeat: 2, yoyo: true})
        .to('.slideshow-swipe', 1, {opacity: 0, autoAlpha:0});
}
function reverseContentAnimation(){
  if(navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
    try{
      window.scrollTo(0);
    } catch(err){
      console.log('hey there', err)
    }
}
else{
  try{
    window.scrollTo(0);
  } catch(err){
    console.log('hey there', err)
  }
}
  var tl = gsap.timeline();
  tl.to('.body', 0.5, {scrollTop: 0,ease: Power2.easeIn})
  .to('.slide__figure-img', 0.7, {left: "50%", top: "50%", transform:"translate(-50%, -50%)"})
  .to('.slide__figure-title', 0.6, {transform:"translate(-50%, -50%)"}, "<")
  .to('.slide__figure-title', 0.3, {fontSize:"10rem"})
}
function delay(n){
  n = n || 2000;
  return new Promise(done => {
    setTimeout(()=>{
      done();
    }, n)
  });
}

barba.init({
  transitions: [{
    name: 'basic-transition',
    from: {
      namespace: ['home']
    },
    to: {
      namespace: ['proj', 'proj2', 'proj3', 'proj4', 'proj5', 'proj6']
    },
    async leave(data){
      const done = this.async();

      console.log('leaving main',data.trigger);
      pageTransition();
      await delay(1500);
      done();
    },
    async enter(data){
      contentAnimation();
      console.log('enter project');
    },
    async once(data){
      contentAnimation();
      console.log('enter project');
    }
  },
  {
    name: 'reverse-transition',
    from: {
      namespace: ['proj', 'proj2', 'proj3', 'proj4', 'proj5', 'proj6']
    },
    to: {
      namespace: ['home']
    },
    async leave(data){
      const done = this.async();

      //console.log('yeet',data.trigger.getBoundingClientRect().x);
      console.log('leaving project');
      reverseContentAnimation();
      await delay(1500);
      done();
    },
    async enter(data){
      console.log('enter main');
      setupHome();
    },
    async once(data){
      console.log('enter main');
      setupHome();
    }
  },{
    name: 'projects-transition',
    to: {
      route: ['proj', 'proj2', 'proj3', 'proj4', 'proj5', 'proj6']
    },
    async enter(data){
      contentAnimation();
      console.log('enter project');
    },
    async once(data){
      contentAnimation();
      console.log('enter project');
    }
  }]
})
