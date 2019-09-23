document.addEventListener('DOMContentLoaded', () =>{
  let controller = new ScrollMagic.Controller();

  let timeline2 = new TimelineMax();
  timeline2
  .to('.cloud1', 4, {
    x:1300,
    ease:Power3.easeInOut
  }, '-=4')
  .to('.cloud2', 4, {
    x:-1200,
    ease:Power3.easeInOut
  }, '-=4')
  .to('.sun', 4, {
    y:-200,
    ease:Power3.easeInOut
  })
  .to('.bird1', 4, {
    x:400,
    ease:Power3.easeInOut
  }, '-=4')
  .to('.bird2', 4, {
    x:-400,
    ease:Power3.easeInOut
  }, '-=4')

  .to('.cloud1', 4, {
    x:0,
    ease:Power3.easeInOut
  })
  .to('.cloud2', 4, {
    x:0,
    ease:Power3.easeInOut
  })
  
  .to('.bird2', 4, {
    x:0,
    ease:Power3.easeInOut
  })
  .to('.bird1', 4, {
    x:0,
    ease:Power3.easeInOut
  })

  .to('.sun', 4, {
    y:80,
    ease:Power3.easeInOut
  })

  .to('.top .image-container', 4, {
      height: 0
  })
  
  .to('.star1', 4, {
    x:1000,
    ease:Power3.easeInOut
  }, '-=3')
  .to('.star2', 4, {
    y:300,
    ease:Power3.easeInOut
  }, '-=3')
  .to('.star3', 4, {
    x:-500,
    ease:Power3.easeInOut
  }, '-=3')

  .to('.moon', 8, {
    y:-300,
    ease:Elastic.easeInOut
  }, '-=3')

  let scene2 = new ScrollMagic.Scene({
      triggerElement: '.second-section',
      duration: '5000',
      triggerHook: 0,
      offset: '0'

  })
  .setTween(timeline2)
  .setPin('.second-section')
  .addTo(controller);
})