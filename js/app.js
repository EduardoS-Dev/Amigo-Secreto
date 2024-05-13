let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

    amigos.push(amigo.value)

    amigo.value = '';
}

function sortear(){
    embaralha(amigos)
    let sorteio = document.getElementById('lista-sorteio')

    for(let i = 0; i < amigos.length; i++){

        if(i == amigos.length - 1) {
            sorteio.innerHTML += `${amigos[i]} --> ${amigos[0]}<br>` 
        } else {
            sorteio.innerHTML += `${amigos[i]} --> ${amigos[i + 1]}<br>` 
        }
    }
    
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
