/* Quando utilizar o reduce?
Quando você quer reduzir o array à algum tipo de dado.
*/

// Exemplo 1:
const numbers = [1, 2, 3]
const sum = numbers.reduce((accumulator, item) => accumulator + item, 0) // o 0 é o ponto de partida do accumulator.
console.log(sum);

// Exemplo 2:
const cart = [
    { name: 'Dark Souls III', price: 95.03 },
    { name: 'Tomb Raider', price: 101.19 },
    { name: 'Sekiro', price: 58.99 },
    { name: 'Resident Evil', price: 129.33 },
    { name: 'Death Stranding', price: 149.99 }
]
const products = cart.reduce((accumulator, { name }) => `${accumulator}- ${name}\n`, '')
console.log(products);


// Exemplo 3:
const people = [
    { id: 5, name: 'Beatriz', age: 21, federativeUnit: 'Rio de Janeiro' },
    { id: 81, name: 'Thales', age: 18, federativeUnit: 'Alagoas' },
    { id: 47, name: 'Ana', age: 18, federativeUnit: 'São Paulo' },
    { id: 6, name: 'Carol', age: 20, federativeUnit: 'Minas Gerais' },
]

const agesFrequency = people.reduce((accumulator, { age }) => {
    accumulator[age] = accumulator[age] + 1 || 1
    return accumulator
}, {})

console.log(agesFrequency);