// console.log('hello');
const scrollButton = document.querySelector('#scrollToTopBtn');
window.addEventListener('scroll',function(){
  // console.log('scrolll');
  if (window.scrollY > window.innerHeight) {
    scrollButton.classList.add('top-link--visible');
  }else {
    scrollButton.classList.remove('top-link--visible');
  }
})
// console.log(scrollToTopBtn);
