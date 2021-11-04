const numbers = [1, 2, 3]
console.log(numbers);


/* Quando utilizar o map?
O map é utilizando quando você quer obter
um novo array com a mesma quantidade de itens do array original,
mas, com cada item transformado.
*/

/* Exemplo 1:  */
const squareNumbers = numbers.map((item) => item ** 2)
console.log(squareNumbers);


/* Exemplo 2: */
const tvShows = [
    { name: 'Breaking Bad', releaseYear: 2008 },
    { name: 'Mr. Robot', releaseYear: 2005 },
    { name: 'True Detective', releaseYear: 2018 },
    { name: 'House', releaseYear: 2004 },
]


const showNames = tvShows.map((tvShow) => tvShow.name)
console.log(showNames);

/* Exemplo 3: (Utilizando destructuring) */
const showNames2 = tvShows.map(({ name }) => name)
console.log(showNames2)