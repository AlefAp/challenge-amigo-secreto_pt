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

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert ("Não tem nenhum amigo para sortear!")
        return
    }

    let amigoSecreto = Math.floor(Math.random() * listaAmigos.length)

    let amigoSorteado = listaAmigos[amigoSecreto]

    let resultado = document.getElementById("resultado")
    resultado.innerHTML = "Amigo sorteado: <strong>" + amigoSecreto + "</strong>"
}