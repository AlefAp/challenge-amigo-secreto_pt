// Array para conter os nomes dos amigos
let listaAmigos = []

// Função para adicionar amigos a lista
function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo")
    let nomeAmigo = inputAmigo.value.trim()

    // Validar que o Input não está vazio
    if (nomeAmigo === "") {
        alert ("Por favor, digite um nome.")
        return // o Return interrompe a execução da função
    }

    // Validar se o nome está duplicado
    if (listaAmigos.includes(nomeAmigo)) {
        alert ("Este nome já foi adicionado")
        return
    }

    // Adicionar um nome a lista
    listaAmigos.push(nomeAmigo)

    // Limpar a lista quando o site por iniciado
    inputAmigo.value = ""

    // Atualizar a lista no HTML
    atualizarLista()
}