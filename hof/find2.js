const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (array) => {
  return array.find((element) => element.length === 5)
}

console.log(findNameWithFiveLetters(names));