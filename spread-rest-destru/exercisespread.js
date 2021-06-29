// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Maça', 'Uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Morango', 'Kiwi', 'Laranja'];

const fruitSalad = (fruit, additional) => {
  let newArr = [...fruit, ...additional];
  return newArr
};

console.log(fruitSalad(specialFruit, additionalItens));