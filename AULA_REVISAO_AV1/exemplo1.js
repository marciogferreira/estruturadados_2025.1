function gerarNumeroAleatorio() {
    let numeroQUalquer = Math.random() * 100
    numeroQUalquer = Math.floor(numeroQUalquer)
    return numeroQUalquer
}
const numerosAleatorios = []
for(let i = 0; i < 10; i++) {
    numerosAleatorios[i] = gerarNumeroAleatorio();
}
console.log(numerosAleatorios)