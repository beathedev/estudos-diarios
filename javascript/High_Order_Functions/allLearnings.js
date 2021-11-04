/* Aplicando todos conhecimentos adquiridos hoje. */

//Exercício 1: Somar o peopleAmount de todos filmes da Disney
const topBrazilMovies = [
    { title: 'Vingadores: Ultimato', peopleAmount: 19486119, distributedBy: 'Disney' },
    { title: 'Titanic', peopleAmount: 16267649, distributedBy: 'Paramount' },
    { title: 'O Rei Leão', peopleAmount: 14272181, distributedBy: 'Disney' },
    { title: 'Vingadores: Guerra Infinita', peopleAmount: 10969065, distributedBy: 'Disney' },
    { title: 'Tubarão', peopleAmount: 1303000, distributedBy: 'Universal' },
]

const totalViewedByDisney = topBrazilMovies
    .filter(({ distributedBy }) => distributedBy === 'Disney')
    .reduce((accumulator, { peopleAmount }) => accumulator + peopleAmount, 0)
console.log(totalViewedByDisney);