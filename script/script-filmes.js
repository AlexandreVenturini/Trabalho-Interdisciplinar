// Pegando a referência da tabela
const tabelaFilmes = document.getElementById("tabelaFilmes");
const tBodyFilmes = document.getElementById("tBodyFilmes");

// Variáveis para armazenar os filtros
let filtroAnoValue = "";
let filtroClassValue = "";
let filtroPrecoValue1 = "";
let filtroPrecoValue2 = "";
let filtroGeneroValue = "";

// Função para gerar a linha da tabela
function gerarRowTBody(indice) {
    let trTabela = document.createElement("tr");

    // Adicionando as células da linha com as informações dos filmes
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

    // Adiciona as células na linha
    trTabela.appendChild(tdNum);
    trTabela.appendChild(tdTitulo);
    trTabela.appendChild(tdGenero);
    trTabela.appendChild(tdValor);
    trTabela.appendChild(tdClass);
    trTabela.appendChild(tdAno);

    // Adiciona a linha no corpo da tabela
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

//Função que filtra por preço minimo
function filtroPrecoMenor() {
    filtroPrecoValue1 = document.getElementById('filtroPreco1').value;
    aplicarTodosFiltros();
}

// Função que filtra por preço máximo
function filtroPrecoMaior() {
    filtroPrecoValue2 = document.getElementById('filtroPreco2').value;
    aplicarTodosFiltros();
}

// Função que filtra por gênero
function filtroGenero() {
    filtroGeneroValue = document.getElementById('filtroGenero').value.toLowerCase();
    aplicarTodosFiltros();
}

// Função que aplica todos os filtros
function aplicarTodosFiltros() {
    limparTabela(); // Limpa a tabela antes de adicionar as novas linhas

    // Percorre todos os filmes e aplica os filtros
    for (let i = 0; i < vetTitulos.length; i++) {
        let ano = vetAnos[i];
        let classificacao = vetClassificacoes[i];
        let preco = vetValores[i];
        let genero = vetGeneros[i].toLowerCase();

        // Verifica se o filme passa nos filtros aplicados
        if (
            (filtroAnoValue === '' || ano == filtroAnoValue) &&
            (filtroClassValue === '' || classificacao == filtroClassValue) &&
            (filtroPrecoValue1 === '' || preco >= filtroPrecoValue1) &&
            (filtroPrecoValue2 === '' || preco <= filtroPrecoValue2) &&
            (filtroGeneroValue === '' || genero.includes(filtroGeneroValue))
        ) {
            gerarRowTBody(i); // Gera a linha da tabela se o filme passar no filtro
        }
    }
}

// Gera todas as linhas da tabela inicialmente (sem filtros)
for (let indice = 0; indice < vetTitulos.length; indice++) {
    gerarRowTBody(indice);
}