// Arrow Function
const sum = (number1, number2) => {
    return number1 + number2;
}
console.log(sum(20, 20));

//Função anonima
const sum2 = function(number1, number2) {
    return number1 + number2;
}
console.log(sum2(20, 20));

/* Variações de Arrow Function

 - Sem retorno
 Neste conceito você retorna o valor sem utilizar o comando return.
*/

const sum3 = (number1, number2) => number1 + number2
console.log(sum3(10, 20));


/* - Sem Parâmetros */
const community = () => 'CollabCode'
console.log(community());

/* - Só um parâmetro */
const double = (number) => number + 2;
console.log(double(2));

/* - Com dois ou mais parâmetros */
const sum4 = (number1, number2, number3, number4) => number1 + number2 + number3 + number4;
console.log(sum4(1, 2, 3, 4));

/* - Arrow Function com chaves 
Ao utilizar as chaves, é obrigatório utilizar o return.
*/
const age = (year) => {
    if (age >= 18) {
        return 'Maior idade';
    } else {
        return 'Menor Idade';
    }
}
console.log(age(15));

/* - Retornando um JSON sem return 
Para retornar um json, não é possível fazer da seguinte maneira:
const getPerson = () => {{name:"Bia", age:"21"}}
Pois ao utilizar as chaves, é obrigatório utilizar o return.
A maneira mais correta seria:
*/
const getPerson = () => ({ name: "Bia", age: "21" });
console.log(getPerson());

/* - Immediately invoked function expression (IIE) */
// (() => {
//     const getPerson = () => ({ nome: "Beatriz", age: "20" })
//     console.log(getPerson());
// })()

/* - Funções com this 
Essa função da erro, pois o this dentro do setInterval, se refere ao window
global do javascript.
*/
(() => {
    function Person() {
        this.year = 0;
        setInterval(function() {
            this.year += 1;
            console.log(this.year);
        }, 1000);
    }
    const p1 = new Person()
})()

/* - Como resolver? */
function Person() {
    that = this;
    that.year = 0;
    setInterval(function() {
        that.year += 1;
        console.log(that.year);
    }, 1000);
}
const p1 = new Person()