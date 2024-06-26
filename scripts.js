document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("screen-cliente").classList.add("active");
  updateProfile();
});

const precoItens = {
  "retentores de valvula": 30,
  plaina: 100,
  "assentamento de valvula": 150,
  "valvula de admissao": 80,
  "valvula de escape": 90,
  "junta de cabecote": 50,
  selo: 20,
  solda: 200,
};

function cadastrarCliente() {
  const nome = document.getElementById("nome").value;
  const contato = document.getElementById("contato").value;
  const endereco = document.getElementById("endereco").value;

  localStorage.setItem("nome", nome);
  localStorage.setItem("contato", contato);
  localStorage.setItem("endereco", endereco);

  alert("Cliente cadastrado com sucesso!");
  changeScreen("screen-os");
  updateProfile();
}

function confirmarOS() {
  const itens = document.querySelectorAll(".item");
  let listaItens = [];
  itens.forEach((item) => {
    const nomeItem = item.querySelector(".item-select").value;
    const quantidade = item.querySelector(".item-quantidade").value;
    if (quantidade > 0) {
      listaItens.push({
        nome: nomeItem,
        quantidade: parseInt(quantidade),
        preco: precoItens[nomeItem],
      });
    }
  });

  localStorage.setItem("itens", JSON.stringify(listaItens));
  exibirFaturamento();
  changeScreen("screen-faturamento");
}

function adicionarItem() {
  const itensLista = document.getElementById("itens-lista");
  const novoItem = document.createElement("div");
  novoItem.className = "item";
  novoItem.innerHTML = `
        <select class="item-select">
            <option value="retentores de valvula">Retentores de Válvula</option>
            <option value="plaina">Plaina</option>
            <option value="assentamento de valvula">Assentamento de Válvula</option>
            <option value="valvula de admissao">Válvula de Admissão</option>
            <option value="valvula de escape">Válvula de Escape</option>
            <option value="junta de cabecote">Junta de Cabeçote</option>
            <option value="selo">Selo</option>
            <option value="solda">Solda</option>
        </select>
        <input type="number" class="item-quantidade" placeholder="Quantidade" min="1">
        <button class="remove-item" onclick="removerItem(this)">X</button>
    `;
  itensLista.appendChild(novoItem);
}

function removerItem(elemento) {
  elemento.parentElement.remove();
}

function escolherPagamento() {
  changeScreen("screen-pagamento");
}

function selecionarPagamento(metodo) {
  alert(`Você selecionou o pagamento por: ${metodo}`);
  resetarFormulario();
  changeScreen("screen-cliente");
}

function resetarFormulario() {
  document.getElementById("nome").value = "";
  document.getElementById("contato").value = "";
  document.getElementById("endereco").value = "";
  document.getElementById("placa").value = "";
  document.getElementById("mecanico").value = "";
  document.getElementById("itens-lista").innerHTML = `
        <div class="item">
            <select class="item-select">
                <option value="retentores de valvula">Retentores de Válvula</option>
                <option value="plaina">Plaina</option>
                <option value="assentamento de valvula">Assentamento de Válvula</option>
                <option value="valvula de admissao">Válvula de Admissão</option>
                <option value="valvula de escape">Válvula de Escape</option>
                <option value="junta de cabecote">Junta de Cabeçote</option>
                <option value="selo">Selo</option>
                <option value="solda">Solda</option>
            </select>
            <input type="number" class="item-quantidade" placeholder="Quantidade" min="1">
            <button class="remove-item" onclick="removerItem(this)">X</button>
        </div>`;
  localStorage.clear();
  updateProfile();
  document.getElementById("lista-itens").innerHTML = "";
  document.getElementById("total-faturamento").textContent = "";
}

function changeScreen(screenId) {
  const screens = document.querySelectorAll(".screen");
  screens.forEach((screen) => {
    screen.classList.remove("active");
  });
  document.getElementById(screenId).classList.add("active");
}

function updateProfile() {
  const nome = localStorage.getItem("nome");
  const contato = localStorage.getItem("contato");
  const endereco = localStorage.getItem("endereco");

  document.getElementById("profile-nome").textContent = nome || "N/A";
  document.getElementById("profile-contato").textContent = contato || "N/A";
  document.getElementById("profile-endereco").textContent = endereco || "N/A";
}

function exibirFaturamento() {
  const listaItens = JSON.parse(localStorage.getItem("itens")) || [];
  const listaElement = document.getElementById("lista-itens");
  listaElement.innerHTML = "";
  let total = 0;

  listaItens.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.quantidade} x ${item.nome} - R$${item.preco * item.quantidade}`;
    listaElement.appendChild(li);
    total += item.preco * item.quantidade;
  });

  document.getElementById("total-faturamento").textContent =
    `R$${total.toFixed(2)}`;
}
