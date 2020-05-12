const menuBtn = document.querySelector('.menu-btn');
const menuItem = document.querySelector('.menu-btn .burger__items') 
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuItem.classList.add('active');
    menuOpen = true;
      // add listener to disable scroll
     window.addEventListener('scroll', noScroll);      
} else {
    menuBtn.classList.remove('open');
    menuItem.classList.remove('active');
    menuOpen = false;
    // Remove listener to re-enable scroll
     window.removeEventListener('scroll', noScroll);
  }
});

function noScroll() {
    window.scrollTo(0, 0);
}



const gBtn = document.querySelector('.btn1');
const modalItem = document.querySelector('.modal');
const cBtn = document.querySelector('.modal__close')

let modalOpen = false;

gBtn.addEventListener('click', () => {
    if (!modalOpen){
        modalItem.classList.add('show')
        modalItem.classList.add('no-scroll')
        modalOpen = true;
        window.addEventListener('scroll', noScroll);   
    }
})

cBtn.addEventListener('click', () =>{
    modalItem.classList.remove('show')
    modalItem.classList.remove('no-scroll')
    modalOpen = false
    window.removeEventListener('scroll', noScroll);
} )

function noScroll() {
    window.scrollTo(0, 0);
}