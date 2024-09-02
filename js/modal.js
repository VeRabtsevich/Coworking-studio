// console.log('modal')
const openModalBtns = document.querySelectorAll('[data-action="modal"]');
const modal = document.querySelector('.modal');
const closMmodalBtn =document.querySelector('#closeModal');
const modalBody =document.querySelector('.modal__body');

openModalBtns.forEach((item) =>  { 
  item.addEventListener('click',function(){
   modal.classList.add('modal--open');
   document.body.classList.add('no-scroll');
  });
})
closMmodalBtn.addEventListener('click',function(){
    modal.classList.remove('modal--open');
   document.body.classList.remove('no-scroll');
})
modal.addEventListener('click',function (){
      modal.classList.remove('modal--open');
   document.body.classList.remove('no-scroll');
  
})
modalBody.addEventListener('click',function (event) {
   event.stopPropagation();
})
document.addEventListener('keydown',function(event) {
   if (event.key == 'Escape') {
        modal.classList.remove('modal--open');
   document.body.classList.remove('no-scroll');
   }
})