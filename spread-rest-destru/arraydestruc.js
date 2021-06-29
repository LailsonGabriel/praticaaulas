const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá
const [firstArray] = saudacoes;
console.log(firstArray)

// Produza o mesmo resultado acima, porém utilizando array destructuring

let arraygato = ['arroz', 'gato', 'água']

const [comida, animal, bebida] = arraygato;

console.log(comida, animal, bebida)

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo