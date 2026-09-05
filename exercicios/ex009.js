// Listas / Arrays

// Guardar varios valores em um unica variavel

let numeros = [1, 5, 9, 15, 30]
console.log(numeros)

const frutas = ["maça", "banana", "uva", "laranja", "Bergamota", "pera"]

console.log(frutas)

// Mostrar no console apenas 'uva'
console.log(frutas[2])
console.log(frutas.length)
console.log(frutas[frutas.length - 1])

frutas.push("goiaba")
frutas.push("kiwi")
console.log(frutas)
frutas.pop()
console.log(frutas)

const resultado = frutas.filter(f => f == "banana")
console.log(resultado) 