# Documentação do Código

## Objetivo

Este código demonstra como criar uma interação simples com o usuário no terminal utilizando o módulo **`readline/promises`** do Node.js. O programa solicita o nome do usuário, aguarda a resposta e exibe uma mensagem de boas-vindas.

---

## Código

```javascript
import readline from 'readline/promises'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Pergunta ao usuário e espera a resposta
let nome = await rl.question('Qual seu nome?')

console.log(`Olá, ${nome}`)

rl.close() // Fecha a interação com o usuário
```

---

# Explicação

## 1. Importação do módulo

```javascript
import readline from 'readline/promises'
```

Importa o módulo `readline/promises`, que permite trabalhar com entrada e saída de dados no terminal utilizando **Promises** e a sintaxe `async/await`.

---

## 2. Criação da interface

```javascript
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
```

Cria uma interface de comunicação entre o programa e o terminal.

### Parâmetros

* **`process.stdin`**

  * Representa a entrada padrão do programa (teclado).

* **`process.stdout`**

  * Representa a saída padrão do programa (terminal).

---

## 3. Solicitação de informação

```javascript
let nome = await rl.question('Qual seu nome?')
```

Exibe a mensagem:

```
Qual seu nome?
```

O programa fica aguardando até que o usuário digite uma resposta e pressione **Enter**.

A resposta é armazenada na variável `nome`.

Exemplo:

```
Qual seu nome? Jefferson
```

Após pressionar **Enter**:

```javascript
nome = "Jefferson"
```

---

## 4. Exibição da mensagem

```javascript
console.log(`Olá, ${nome}`)
```

Utiliza **Template Strings** para inserir o valor da variável dentro da mensagem.

Saída:

```
Olá, Jefferson
```

---

## 5. Encerramento da interface

```javascript
rl.close()
```

Fecha a interface de leitura do terminal.

É importante chamar esse método para liberar os recursos utilizados e permitir que o programa seja encerrado corretamente.

---

# Fluxo de execução

```text
Início
   │
   ▼
Importa o módulo readline/promises
   │
   ▼
Cria a interface de entrada e saída
   │
   ▼
Exibe:
"Qual seu nome?"
   │
   ▼
Usuário digita o nome
   │
   ▼
Resposta é armazenada na variável "nome"
   │
   ▼
Exibe:
"Olá, <nome>"
   │
   ▼
Fecha a interface
   │
   ▼
Fim
```

---

# Exemplo de execução

```text
Qual seu nome? Maria
Olá, Maria
```

---

# Conceitos utilizados

* Módulos ES (`import`)
* `readline/promises`
* Entrada de dados pelo terminal
* Saída de dados com `console.log()`
* `async/await`
* Promises
* Template Strings
* Interface de leitura do terminal (`createInterface`)
* Encerramento da interface (`close()`)

---

# Resumo

Este programa cria uma interação básica com o usuário no terminal. Ele utiliza o módulo `readline/promises` para fazer uma pergunta, aguarda a resposta de forma assíncrona com `await`, exibe uma saudação personalizada e encerra corretamente a interface de leitura.
