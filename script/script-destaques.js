// Pegar referências dos elementos da tabela pelo ID
const tBodyFilmesPreco = document.getElementById("tBodyFilmesPreco");
const tBodyFilmesGenero = document.getElementById("tBodyFilmesGenero");

// Função para gerar a tabela que mostra a quantidade de filmes por gênero
function gerarTabelaPrecoPorGenero() {
    // Criar um objeto para contar quantos filmes tem por gênero
    let generosCount = {};

    // Percorrer a lista de gêneros (vetGeneros) para contar os filmes
    for (let i = 0; i < vetGeneros.length; i++) {
        let genero = vetGeneros[i]; // Pega o gênero atual
        if (generosCount[genero]) {
            // Se o gênero já foi encontrado antes, aumenta a contagem
            generosCount[genero]++;
        } else {
            // Se é a primeira vez que encontramos esse gênero, inicia com 1
            generosCount[genero] = 1;
        }
    }

    // Criar as linhas da tabela com o gênero e a quantidade de filmes
    let indice = 1;
    for (let genero in generosCount) {
        let trTabela = document.createElement("tr"); // Criar uma nova linha
        let tdNum = document.createElement("td"); // Criar uma célula para o número
        tdNum.textContent = indice++; // Número da linha

        let tdGenero = document.createElement("td"); // Criar uma célula para o gênero
        tdGenero.textContent = genero; // Nome do gênero

        let tdQuantidade = document.createElement("td"); // Criar uma célula para a quantidade
        tdQuantidade.textContent = generosCount[genero]; // Quantidade de filmes

        // Adicionar as células à linha (tr)
        trTabela.appendChild(tdNum);
        trTabela.appendChild(tdGenero);
        trTabela.appendChild(tdQuantidade);

        // Adicionar a linha à tabela de filmes por preço
        tBodyFilmesPreco.appendChild(trTabela);
    }
}

// Função para gerar a tabela com os filmes mais caros de cada gênero
function gerarTabelaFilmeMaisCaroPorGenero() {
    let generos = {}; // Objeto para armazenar o filme mais caro de cada gênero

    // Percorrer a lista de títulos, gêneros e valores (preços dos filmes)
    for (let i = 0; i < vetTitulos.length; i++) {
        let genero = vetGeneros[i]; // Gênero do filme
        let valor = vetValores[i]; // Valor (preço) do filme
        let titulo = vetTitulos[i]; // Título do filme

        // Verificar se o gênero já foi registrado
        if (generos[genero] === undefined) {
            // Se o gênero ainda não existe, adicionar o filme atual como o mais caro
            generos[genero] = { valor: valor, titulos: [titulo] };
        } else {
            // Se o filme atual for mais caro que o anterior, atualizar
            if (valor > generos[genero].valor) {
                generos[genero] = { valor: valor, titulos: [titulo] };
            } else if (valor === generos[genero].valor) {
                // Se o preço for igual, adicionar o filme à lista de títulos
                generos[genero].titulos.push(titulo);
            }
        }
    }

    // Limpar a tabela de filmes mais caros antes de gerar a nova
    tBodyFilmesGenero.innerHTML = '';

    // Adicionar cada filme mais caro de cada gênero à tabela
    let numero = 1;
    for (let genero in generos) {
        let filmes = generos[genero].titulos; // Filmes do gênero atual
        let valor = generos[genero].valor; // Valor do filme

        // Adicionar os filmes mais caros desse gênero na tabela
        for (let j = 0; j < filmes.length; j++) {
            let tr = document.createElement('tr'); // Criar uma nova linha

            let tdNumero = document.createElement('td'); // Número da linha
            tdNumero.textContent = numero++; // Incrementar o número

            let tdGenero = document.createElement('td'); // Gênero do filme
            tdGenero.textContent = genero;

            let tdTitulo = document.createElement('td'); // Título do filme
            tdTitulo.textContent = filmes[j];

            let tdValor = document.createElement('td'); // Valor do filme
            tdValor.textContent = valor;

            // Adicionar as células à linha
            tr.appendChild(tdNumero);
            tr.appendChild(tdGenero);
            tr.appendChild(tdTitulo);
            tr.appendChild(tdValor);

            // Adicionar a linha à tabela de filmes por gênero
            tBodyFilmesGenero.appendChild(tr);
        }
    }
}

// Executar as funções que geram as tabelas
gerarTabelaPrecoPorGenero();
gerarTabelaFilmeMaisCaroPorGenero();