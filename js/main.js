 //  Tiny slider
  const slider = tns({
    container: '.slider',
    items: 2.7,
   
    speed: 400,
    mouseDrag: true,
    gutter: 10,
    // loop:false,
    nav: false,
    autoWidth:true,
    lazyload: true,
    swipeAngle: false,

    controlsContainer: '.location__controls',
  });



  const prevMobile = document.querySelector('.location__controls--mobile .prev');
  const nextMobile = document.querySelector('.location__controls--mobile .next');

  prevMobile.onclick = ()=> slider.goTo('prev') ;
  
  nextMobile.onclick = ()=> slider.goTo('next') ;
