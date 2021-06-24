const numbers = [19, 21, 31, 3, 45, 22, 15];

const findDivisibleBy3And5 = (array) => {
  const numero = array.find((element) => element % 3 === 0 && element % 5 === 0);
  return numero
}

console.log(findDivisibleBy3And5(numbers))