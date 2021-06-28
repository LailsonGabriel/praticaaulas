const potencia = [
  {modelo: 'GTI', potencia: '230cv'},
  {modelo: 'GLI', potencia: '230cv'},
  {modelo: 'T-JET', potencia: '152cv'},
  {modelo: 'SI', potencia: '192cv'},
  {modelo: 'GT', potencia: '140cv'},
  {modelo: 'RS', potencia: '150cv'},
]

const carros = [
  {carro: 'Jetta', modelo: 'GLI', ano: 2020},
  {carro: 'Golf', modelo: 'GTI', ano: 2019},
  {carro: 'Civic', modelo: 'SI', ano: 2007},
  {carro: 'Sandero', modelo: 'RS', ano: 2019},
  {carro: 'Vectra', modelo: 'GT', ano: 2011},
  {carro: 'Punto', modelo: 'T-JET', ano: 2009}
];

const newArray = carros.map((car) => {
  let horsePower = potencia.find((potencia) => car.modelo === potencia.modelo)

  return {
    carro: car.carro,
    modelo: car.modelo,
    ano: car.ano,
    potencia: horsePower.potencia
  }
})

console.log(newArray)

