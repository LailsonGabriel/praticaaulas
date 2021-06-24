const assert = require('assert');

// function comparar(num1, num2) {
//   return num1 + num2;
// }

// const expected = comparar(5, 10);

// assert.strictEqual(expected, 5, 'Teu pai pow');


const lista1 = {
  nome: 'João',
  idade: 25
};

const lista2 = {
  nome: 'João',
  idade: 25
};

assert.deepStrictEqual(lista1, lista2, 'TEU PAI POW')