/* 
Temos uma função onde a responsabilidade dela é criar 
um botão. Mas antes do botão ser inserido na tela,
ele passa por um processo de costumização.
*/


function newButton(text, callback) {
    //Botão é criado
    const $body = document.querySelector("body");
    const $button = document.createElement("button");

    //Recebe o texto do botão
    $button.textContent = text;

    /*Recebe o Callback e envia como parametro o 
    elemento button vindo HTML */
    callback($button);

    //Adiciona o botão no HTML
    $body.insertAdjacentElement("beforeend", $button);
}

/* A arrow function sendo enviada como parametro, 
é um callback */
newButton('Login', (button) => {
   button.style.cssText = `
        font-size: 50px;
   `;
   button.addEventListener("click", function() {
        console.log("O botão foi clicado!")
    });

});
newButton('Signup', (button) => {
    button.style.cssText = `
        font-size: 55px;
        color: red;
    `;
    
    button.addEventListener("click", function() {
        alert("Signup!");
    });
});
