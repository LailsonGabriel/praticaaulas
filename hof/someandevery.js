const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((valor) => valor === name)
}

console.log(hasName(names, 'Ana'))