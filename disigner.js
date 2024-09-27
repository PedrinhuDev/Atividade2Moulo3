function desenharRoupas(lista, tagHTML) {
    console.log("desenhando rolpas");

    tagHTML.innerHTML = '';

    for (let i = 0; i < lista.listaDeRoupas.length; i++) {
        tagHTML.innerHTML += `
        <div class='card'>
            <img class="foto" src="${lista.listaDeRoupas[i].foto}">
            <span class="cardTexto">${lista.listaDeRoupas[i].inscricao}</span>
            <span class="texto2">R$${lista.listaDeRoupas[i].valor}</span>
        </div>`;
    }
}