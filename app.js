let listaAmigos = []

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo")
    let nomeAmigo = inputAmigo.value.trim()

    if (nomeAmigo === "") {
        alert ("Por favor, digite um nome.")
        return
    }

    if (listaAmigos.includes(nomeAmigo)) {
        alert ("Este nome já foi adicionado")
        return
    }

    listaAmigos.push(nomeAmigo)
    inputAmigo.value = ""
    atualizarLista()
}

function atualizarLista() {
    let arrayAmigos = document.getElementById("listaAmigos")
    arrayAmigos.innerHTML = ""

    for (let i = 0; i <listaAmigos.length; i++) {
        let li = document.createAttribute("li")
        li.textContent = listaAmigos[i]
        arrayAmigos.appendChild(li)
    }
}