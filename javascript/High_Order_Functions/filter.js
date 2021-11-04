/* 
Quando utilizar o Filter?
O filter é utilizado quando você quer obter 
um novo array com só alguns itens d oarray original.
*/

// Exemplo 1:
const randomNumbers = [36, 99, 37, 63]
const numbersGreaterThan37 = randomNumbers.filter((item) => item > 37) // O retorno sempre será boolean.
console.log(numbersGreaterThan37);


//Exemplo 2:
const tarantinoMovies = [
    { name: 'Bastardos Inglórios', release: 2009 },
    { name: 'Pulp Fiction', release: 1994 },
    { name: 'Sin City', release: 2005 },
    { name: 'Kill Bill 1', release: 2003 },
    { name: 'Django Livre', release: 2012 }
]

const moviesBefore2000 = tarantinoMovies.filter(({ release }) => release > 2000)
console.table(moviesBefore2000);

//Exemplo 3:
const firstTravelerCities = [
    'Sydney',
    'Berlim',
    'Lisboa',
    'Sófia',
    'Praga',
    'Bali',
    'Florianópolis'
]

const secondTravelerCities = ['Praga', 'Roma', 'Chiang Mai', 'Lisboa', 'Zagreb']
const commonCities = firstTravelerCities.filter(city => secondTravelerCities.includes(city))
console.log(commonCities);