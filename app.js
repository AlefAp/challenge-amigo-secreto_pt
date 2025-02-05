let amigos = []

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo")
    let nomeAmigo = inputAmigo.value.trim()

    if (nomeAmigo === "") {
        alert("Por favor, digite um nome.")
        return
    }

    if (amigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado")
        return
    }

    amigos.push(nomeAmigo)
    inputAmigo.value = ""
    atualizarLista()
}

function atualizarLista() {
    let arrayAmigos = document.getElementById("listaAmigos")
    arrayAmigos.innerHTML = ""

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li")
        li.textContent = amigos[i]
        arrayAmigos.appendChild(li)
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não tem nenhum amigo para sortear!")
        return
    }

    let amigoSecreto = Math.floor(Math.random() * amigos.length)

    let amigoSorteado = amigos[amigoSecreto]

    let resultado = document.getElementById("resultado")
    resultado.innerHTML = "Amigo sorteado: <strong>" + amigoSorteado + "</strong>"
}