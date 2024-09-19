// Pegando a referência das tabelas
const tBodyFilmesPreco = document.getElementById("tBodyFilmesPreco");
const tBodyFilmesGenero = document.getElementById("tBodyFilmesGenero");

// Função para gerar a tabela de quantidade por gênero
function gerarTabelaPrecoPorGenero() {
    let generosCount = {};

    // Conta a quantidade de filmes por gênero
    for (let i = 0; i < vetGeneros.length; i++) {
        let genero = vetGeneros[i];
        if (generosCount[genero]) {
            generosCount[genero]++;
        } else {
            generosCount[genero] = 1;
        }
    }

    // Cria linhas da tabela com os gêneros e suas quantidades
    let indice = 1;
    for (let genero in generosCount) {
        let trTabela = document.createElement("tr");
        let tdNum = document.createElement("td");
        tdNum.textContent = indice++;
        let tdGenero = document.createElement("td");
        tdGenero.textContent = genero;
        let tdQuantidade = document.createElement("td");
        tdQuantidade.textContent = generosCount[genero];
        trTabela.appendChild(tdNum);
        trTabela.appendChild(tdGenero);
        trTabela.appendChild(tdQuantidade);
        tBodyFilmesPreco.appendChild(trTabela);
    }
}

// Função para gerar a tabela de filmes mais caros por gênero
function gerarTabelaFilmeMaisCaroPorGenero() {
    let generos = {};

    // Percorre a lista de filmes e encontra o mais caro de cada gênero
    for (let i = 0; i < vetTitulos.length; i++) {
        let genero = vetGeneros[i];
        let valor = vetValores[i];
        let titulo = vetTitulos[i];

        // Se o gênero não está no objeto, adiciona; senão, compara valores
        if (!generos[genero]) {
            generos[genero] = { valor: valor, titulos: [titulo] };
        } else {
            if (valor > generos[genero].valor) {
                generos[genero] = { valor: valor, titulos: [titulo] };
            } else if (valor === generos[genero].valor) {
                generos[genero].titulos.push(titulo);
            }
        }
    }

    // Limpa a tabela existente
    tBodyFilmesGenero.innerHTML = '';

    // Cria linhas da tabela com o filme mais caro por gênero
    let numero = 1;
    for (let genero in generos) {
        generos[genero].titulos.forEach(titulo => {
            let trTabela = document.createElement('tr');

            let tdNum = document.createElement('td');
            tdNum.textContent = numero++;
            trTabela.appendChild(tdNum);

            let tdGenero = document.createElement('td');
            tdGenero.textContent = genero;
            trTabela.appendChild(tdGenero);

            let tdTitulo = document.createElement('td');
            tdTitulo.textContent = titulo;
            trTabela.appendChild(tdTitulo);

            let tdValor = document.createElement('td');
            tdValor.textContent = generos[genero].valor;
            trTabela.appendChild(tdValor);

            tBodyFilmesGenero.appendChild(trTabela);
        });
    }
}

// Executando as funções
gerarTabelaPrecoPorGenero();
gerarTabelaFilmeMaisCaroPorGenero();