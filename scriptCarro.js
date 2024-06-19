const formulario = document.getElementById('contatoForm');
const campos = document.querySelectorAll('.campo');
const erros = document.querySelectorAll('.erro');
const placaInput = document.getElementById('placa');
const mecanicoInput = document.getElementById('mecanico');
const pecasInput = document.getElementById('pecas');

formulario.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita o envio padrão do formulário
})

function abrirPagina(){ 
  let placaValido = placaInput.value;
  let mecanicoValido = mecanicoInput.value;
  let pecasValido = pecasInput.value;

  let formularioValido = placaValido && mecanicoValido && pecasValido;

  if (formularioValido) {
    alert('Cadastrado Ordem de Serviço!');
    window.location.href = "faturamento.html";
  } else {
    mostrarErros(placaValido, placaInput, 'erroNome');
    mostrarErros(mecanicoValido, mecanicoInput, 'erroMecanico');
    document.getElementById('submitBtn').classList.add('invalid');
  }
}