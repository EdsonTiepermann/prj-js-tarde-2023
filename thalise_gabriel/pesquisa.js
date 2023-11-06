const filmeInput = document.querySelector("#filme");
const botao = document.querySelector("#botao");
const saudacao = document.querySelector('#saudacao');
const lista = document.querySelector("div.lista");

let nomeParametro = new URLSearchParams(window.location.search);
let nomeCliente = nomeParametro.get('login');

if (nomeCliente) {
    saudacao.innerHTML = `Seja bem-vindo ${nomeCliente}`;
}

botao.addEventListener('click', function (e) {
    e.preventDefault();
    buscarFilmes(filmeInput.value);
});

const buscarFilmes = (nomeFilme) => {
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
    };
    
    fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(nomeFilme)}&apikey=cfc1236f`, options)
        .then(response => response.json())
        .then(data => {
            if (data && data.Search) {
                carregarFilmes(data);
            } else {
                alert("Nenhum filme encontrado")
            }
        })
        .catch(error => {
            console.log(error);
        });
};

const carregarFilmes = (json) => {
    lista.innerHTML = "";
    
    json.Search.forEach(element => {
        let item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = `<a href="pagfilme.html?titulo=${encodeURIComponent(element.Title)}"> <img src="${element.Poster}" alt="${element.Title}" /><h2>${element.Title}</h2></a>`;
        lista.appendChild(item);
    });
}