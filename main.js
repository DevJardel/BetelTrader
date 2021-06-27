// Abre e fecha menu quando clicado 
const nav = document.querySelector("#header nav")
const toggle = document.querySelectorAll("nav .toggle")

// =====Dois metodos de abrir e fechar o menu====
/*
toggle.forEach((element) => {
    element.addEventListener("click", function(){
    nav.classList.toggle("show")
  })  
});
*/

for (const element of toggle) {
    element.addEventListener("click", function(){
        nav.classList.toggle("show")
    })
}
// =====Dois metodos de abrir e fechar o menu====

// ==========Clicar em um item do menu, esconde o menu==========
const links = document.querySelectorAll("nav ul li a")

for (const link of links) {
    link.addEventListener("click", function(){
        nav.classList.remove("show")
    })
}

// ==========Mudar o header da página quando de sroll==========

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener("scroll",function() {
    if (window.scrollY >= navHeight) {
        header.classList.add("scroll")
    }else{
        header.classList.remove("scroll")
    }
})

// ==========Depoimentos Slider/Swiper==========

const swiper = new Swiper('.swiper-container', {
    slidesPerview: 1,
    pagination:{
        el: ".swiper-pagination"
    },
    mousewheel: true,
    keybord: true,
    breakpoints:{
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
  });

//   SroolReveal: Mostra elementos quando der scroll na pagina

const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "50px",
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
     #about .image, #about .text,
     #services header, #services .card,
     #testimonials header, #testimonials .testimonials
     #contact .text, #contact .links,
     footer .brand, footer .social 
    `, { interval: 100})

// Botao voltar para o topo

const voltarTopo  = document.querySelector(".back-to-top")

window.addEventListener("scroll", function(){
    if(window.scrollY >= 560){
        voltarTopo.classList.add("show")
    }else{
        voltarTopo.classList.remove("show")
    }
})

// menu ativo comforme scrool da pagina
const sections = document.querySelectorAll('main section[id]')
window.addEventListener("scroll", function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
})

// window.addEventListener('scroll', function () {
//     activateMenuAtCurrentSection()
//   })
  