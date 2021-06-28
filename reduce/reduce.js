const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

let itsEven = numbers.filter((number) => number % 2 === 0);

console.log(itsEven)

console.log(itsEven.reduce((result, num) => result + num))

