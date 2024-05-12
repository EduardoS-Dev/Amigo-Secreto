let listaAmigos = []

function adicionar(){
    let nomeAmigo = document.getElementById('nome-amigo').value;
    let campoListaAmigos = document.getElementById('lista-amigos');

    listaAmigos.push(' ' + nomeAmigo);

    campoListaAmigos.innerHTML = `${listaAmigos}`;
}