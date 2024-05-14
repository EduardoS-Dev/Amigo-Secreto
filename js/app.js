let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    if(amigo.value == ''){
        alert('Digite o nome de um amigo')
    } else {
        if(amigos.includes(amigo.value)){
            alert(`${amigo.value} já está no sorteio`)
        } else {
            if (lista.textContent == '') {
                lista.textContent = amigo.value;
                amigos.push(amigo.value);
            } else {
                lista.textContent = lista.textContent + ', ' + amigo.value;
                amigos.push(amigo.value);
            }
        }
    }

    amigo.value = '';

    atualizarLista();
    atualizarSorteio();
}

function sortear(){
    embaralha(amigos)

    if(amigos.length > 1){
        let sorteio = document.getElementById('lista-sorteio')

        for(let i = 0; i < amigos.length; i++){

            if(i == amigos.length - 1) {
                sorteio.innerHTML += `${amigos[i]} --> ${amigos[0]}<br>` 
            } else {
                sorteio.innerHTML += `${amigos[i]} --> ${amigos[i + 1]}<br>` 
            }
        }
    } else {
        alert('Por favor adiciona mais amigos para brincar.')  
    }


}

function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
}

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}


function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';


    for (let i = 0; i < amigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });


        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}


function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

