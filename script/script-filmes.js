// Pegando a referência da tabela
const tabelaFilmes = document.getElementById("tabelaFilmes");
const tBodyFilmes = document.getElementById("tBodyFilmes");

// Variáveis globais para armazenar os filtros
let filtroAnoValue = "";
let filtroClassValue = "";
let filtroPrecoValue = "";
let filtroGeneroValue = "";

// Função para gerar a linha da tabela
function gerarRowTBody(indice) {
    let trTabela = document.createElement("tr");
    let tdNum = document.createElement("td");
    tdNum.textContent = indice + 1;
    let tdTitulo = document.createElement("td");
    tdTitulo.textContent = vetTitulos[indice];
    let tdGenero = document.createElement("td");
    tdGenero.textContent = vetGeneros[indice];
    let tdValor = document.createElement("td");
    tdValor.textContent = vetValores[indice];
    let tdClass = document.createElement("td");
    tdClass.textContent = vetClassificacoes[indice];
    let tdAno = document.createElement("td");
    tdAno.textContent = vetAnos[indice];
    trTabela.appendChild(tdNum);
    trTabela.appendChild(tdTitulo);
    trTabela.appendChild(tdGenero);
    trTabela.appendChild(tdValor);
    trTabela.appendChild(tdClass);
    trTabela.appendChild(tdAno);
    tBodyFilmes.appendChild(trTabela);
}

// Função para limpar a tabela antes de gerar uma nova lista filtrada
function limparTabela() {
    tBodyFilmes.innerHTML = '';
}

// Função que filtra por ano de lançamento
function filtroAno() {
    filtroAnoValue = document.getElementById('filtroAno').value;
    aplicarTodosFiltros();
}

// Função que filtra por classificação indicativa
function filtroClassificacao() {
    filtroClassValue = document.getElementById('filtroClass').value;
    aplicarTodosFiltros();
}

// Função que filtra por preço
function filtroPreco() {
    filtroPrecoValue = document.getElementById('filtroPreco').value;
    aplicarTodosFiltros();
}

// Função que filtra por gênero
function filtroGenero() {
    filtroGeneroValue = document.getElementById('filtroGenero').value.toLowerCase();
    aplicarTodosFiltros();
}

// Função que aplica todos os filtros
function aplicarTodosFiltros() {
    limparTabela();
    
    for (let i = 0; i < vetTitulos.length; i++) {
        let ano = vetAnos[i];
        let classificacao = vetClassificacoes[i];
        let preco = vetValores[i];
        let genero = vetGeneros[i].toLowerCase();

        if (
            (filtroAnoValue === '' || ano == filtroAnoValue) &&
            (filtroClassValue === '' || classificacao == filtroClassValue) &&
            (filtroPrecoValue === '' || preco <= filtroPrecoValue) &&
            (filtroGeneroValue === '' || genero(filtroGeneroValue))
        ) {
            gerarRowTBody(i);
        }
    }
}

// Loop para gerar todas as linhas
for(let indice = 0; indice < vetTitulos.length; indice++){
    gerarRowTBody(indice);
}