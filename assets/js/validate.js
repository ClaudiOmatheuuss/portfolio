window.onscroll = function() {
    scrollFunction();
}
textarea.onscroll = function(){
    scrollFunctionTextarea();
}
  
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollToTop").style.display = "block";
    } else {
      document.getElementById("scrollToTop").style.display = "none";
    }
}
  
//Seu JavaScript de validação aqui
const formulario = document.querySelector('formcontato__form');
const campoNome = document.getElementById('#nome');
const campoEmail = document.getElementById('#email');
const campoAssunto = document.getElementById('#assunto');
const campoMensagem = document.getElementById('#mensagem');
const botao = document.getElementById('#formcontato__botao');

// Adiciona um evento de validação ao formulário
formulario.addEventListener('input', function() {
  if (campoNome.validity.valid && campoEmail.validity.valid && campoAssunto.validity.valid && campoMensagem.validity.valid) {
    botao.disabled = false;
  } else {
    botao.disabled = true;
  }
});