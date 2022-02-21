document.addEventListener('DOMContentLoaded', function () {

  //* burger
  const burger = document.querySelector('.menu__burger')
  const mainMenu = document.querySelector('.menu__list')
  const body = document.querySelector('body')

  burger.classList.add('unToggled')

  burger.addEventListener('click', function() {
    burger.classList.toggle('toggled')
    burger.classList.toggle('unToggled')
    mainMenu.classList.toggle('active')
    body.classList.toggle('hidden')
  })


  //* slider
  const saleSwiper = new Swiper('.slider', {
    // loop: true,
    speed: 700,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 40,
    navigation: {
      nextEl: '.slider__btn--next',
      prevEl: '.slider__btn--prev',
      disabledClass: 'slider__btn--disabled'
    },
    slideActiveClass: 'slider__slide--active',
  })

  //gsap
  const heroTl = gsap.timeline()

  heroTl.from(".hero__descr", 
    {
      y: -200,
      opacity: 0,
      duration: .4, 
      ease: "power3.out"
    })
    .from(".hero__title", 
    {
      x: 800,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out"
    }, .3)
    .from(".hero__btn", 
    {
      y: 300,
      opacity: 0,
      duration: .3,
      ease: "elastic.out(1, 0.3)"
    }, .7)
    .from(".hero__social", 
    {
      y: 300,
      opacity: 0,
      duration: 2.1,
      ease: "elastic.out(1, 0.3)"
    }, 1.2)


    //* modal
  const modalBtn = document.querySelector('.hero__btn')
  const modalOverlay = document.querySelector('.modal-overlay')
  const modalWindow = document.querySelector('.modal-window')
  const modalClose = document.querySelector('.modal-window__close')

  modalBtn.addEventListener('click', function() {
    modalOverlay.classList.add('modal-overlay--active')
    modalWindow.classList.add('modal-window--active')
    body.classList.add('hidden')
  })

  modalClose.addEventListener('click', function() {
    modalOverlay.classList.remove('modal-overlay--active')
    modalWindow.classList.remove('modal-window--active')
    body.classList.remove('hidden')
  })

  document.addEventListener('click', function(e) {
    if (e.target == modalOverlay || e.target == modalClose || !e.target == modalWindow){
      modalOverlay.classList.remove('modal-overlay--active')
      modalWindow.classList.remove('modal-window--active')
      body.classList.remove('hidden')
    }
  })




})