/* High-Order function, o que é?
1) Uma função que recebe uma função por argumento
2) Uma função que retorna uma função */

/* Exemplo de uma função que NÃO é High Order Function:  */
function double(aNumber) {
    return aNumber * 2
}

function triple(aNumber) {
    return aNumber * 3
}

function quadruple(aNumber) {
    return aNumber * 4
}
console.log(double(9))
console.log(triple(9))
console.log(quadruple(9))

/* Utilizando as funções desta maneira, é notória a redundância entre elas, é possível resolver este problema
utilizando uma High Order Function. 

Exemplo de High Order Function:  
function getMultiplier(multiplier) {
    return function(aNumber) {
        return aNumber * multiplier
    }
}

*/

/* Versão mais enxuta:  */

const getMultiplier = multiplier => aNumber => aNumber * multiplier

const double2 = getMultiplier(2)
const triple2 = getMultiplier(3)
const quadruple2 = getMultiplier(4)
console.log(double2(3))
console.log(triple(40))
console.log(quadruple(4))

/* Neste exemplo de high order function, o getMultiplier retornará uma função, o retorno dessa função pode ser armazenada numa varíavel
assim como foi feito acima, ou seja, a variável double2 recebe "return function(aNumber) { return aNumber * multiplier }".
*/