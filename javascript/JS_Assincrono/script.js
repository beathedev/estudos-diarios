/* Exemplo 1: (assíncrono) */
let randomNumber = 9
setTimeout(() => {
    randomNumber += 100
    console.log(randomNumber);
}, 2000);

console.log(randomNumber);
/* A última linha foi executada primeiro do que a função setTimeout */

/* Exemplo 2: (assíncrono) */

//   Resolve = quando for resolvida / Reject = quando for rejeitada
const aPromise = new Promise((resolve, reject) => {
    const aNumber2 = 37
        //resolve(aNumber2)
    reject(aNumber)
})

//O metódo .then é responsável por receber a resposta de sucesso.
aPromise
    .then(value => value)
    .then(value => {
        console.log(value);
    })
    // O catch só é executada em 2 operações:
    // 1 - Quando o metódo reject é invocado
    // 2 - Quando o código dentro de algum then, tem algum erro.
    .catch(rejectValue => {
        console.log({ rejectValue });
    })