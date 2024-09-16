const tabelaFilmes = document.getElementById("tabelaFilmes");
const tBodyFilmes = document.getElementById("tBodyFilmes");

function gerarRowTBody(indice){
    let trTabela = document.createElement("tr");
    let tdNum = document.createElement("td");
    tdNum.textContent =  indice + 1; 
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