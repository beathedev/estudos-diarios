const resposta = document.getElementById('resposta');
let page = 1;
/* O Await só pode ser utilizada DENTRO de uma função async.
Enquanto a resposta da requisição não chegar, todo código abaixo da linha do await NÃO será executado
Quando a resposta for obtida, essa invocação resultará em um PROMISE, e o response receberá o valor desta promise.
Após esse processo, as linhas abaixo serão executadas.
*/


const getPosts = async () => {
    const response =  await fetch(`https://jsonplaceholder.typicode.com/posts/${page}`);
    const data = await response.json()
    resposta.style.display = 'block'
    return resposta.innerHTML = JSON.stringify(data);
}

getPosts()