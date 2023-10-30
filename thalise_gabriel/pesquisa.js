var filme = document.querySelector("#filme")
const botao = document.querySelector("#botao")

botao.addEventListener('click', function (e) {
    let filmes = filme.value
e.preventDefault()
const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
}
fetch(`http://www.omdbapi.com/?s=${filmes}&apikey=cfc1236f`, options)
.then(function (response) {
    response.json()
        .then(function (data) {
            carregarFilme(data)
                
                               
        })
})

.catch((error) => {
    console.log(error);
});
})

const carregarFilme = (json) => {
    const lista = document.querySelector("div.lista");
    lista.innerHTML = "";

    json.Search.forEach(element => {
        console.log(element);

       let item = document.createElement("div");
       item.classList.add("item");

       item.innerHTML = `<a href ="${`pagfilme.html`}"> <img src="${element.Poster}" /><h2>${element.Title}</h2></a>`;

       lista.appendChild(item);
    });
}