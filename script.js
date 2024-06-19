const formulario = document.getElementById('contatoForm');
const campos = document.querySelectorAll('.campo');
const erros = document.querySelectorAll('.erro');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const assuntoInput = document.getElementById('assunto');
const mensagemInput = document.getElementById('mensagem');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
})

function abrirPagina() {
  let nomeValido = nomeInput.value;
  let emailValido = emailInput.value;
  let assuntoValido = assuntoInput.value;
  let mensagemValida = mensagemInput.value;

  let formularioValido = nomeValido && emailValido && assuntoValido && mensagemValida;

  if (formularioValido) {
    window.location.href = "carro.html";
    alert('Cliente Cadastrado!');
    } else {
    alert('Formulário invalido!');
  }
}