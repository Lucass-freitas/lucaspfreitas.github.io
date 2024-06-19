const formulario = document.getElementById('contatoForm');
const campos = document.querySelectorAll('.campo');
const erros = document.querySelectorAll('.erro');
const pecasInput = document.getElementById('pecas');
const mOInput = document.getElementById('mO');

formulario.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita o envio padrão do formulário
})

function abrirPagina() {
  let pecasValido = pecasInput.value;
  let mOValido = mOInput.value;

  let formularioValido = pecasValido && mOValido;

  if (formularioValido) {
    alert('Serviço concluido!');
    window.location.href = "index.html";
  } else {
    alert('Verifique o preenchimento dos campos!');
  }
}

