//JavaScript de validação do form de contato
const formulario = document.querySelector('.formcontato__form');
const campoNome = document.querySelector('#nome');
const campoEmail = document.querySelector('#email');
const campoAssunto = document.querySelector('#assunto');
const campoMensagem = document.querySelector('#mensagem');
const botao = document.querySelector('#formcontato__botao');

// Adiciona um evento de validação ao formulário
formulario.addEventListener('input', function() {
  if (campoNome.validity.valid && campoEmail.validity.valid && campoAssunto.validity.valid && campoMensagem.validity.valid) {
    botao.disabled = false;
  } else {
    botao.disabled = true;
  }
});