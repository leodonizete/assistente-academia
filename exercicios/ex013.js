import readline from 'readline/promises'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Pergunta ao usuário e espera a resposta
let nome = await rl.question('Qual seu nome?') 
console.log(`Olá, ${nome}`)

rl.close() // Fecha a interação com o usuário