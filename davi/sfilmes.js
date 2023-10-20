let nomeparametros = new URLSearchParams(window.location.search);
let nomeusuario = nomeparametros.get("nome");

console.log(nomeusuario)

document.querySelector('#nomeTopo').innerHTML = `Seja Bem Vindo ${nomeusuario}`

