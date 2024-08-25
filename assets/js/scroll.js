// Script de funcionamento do botão que ao ser clicado retorna ao inicio do scroll
window.onscroll = function () {
  scrollFunction();
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTop").style.display = "block";
  } else {
    document.getElementById("scrollToTop").style.display = "none";
  }
}

// Script para animação no scroll

const myObserver = new IntersectionObserver((entries) => {
  entries.forEach( (entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  })  
})

const elements = document.querySelectorAll(".hidden");

elements.forEach( (element) => { myObserver.observe(element) })