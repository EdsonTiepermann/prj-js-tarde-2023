var filme = document.querySelector("#filme")
let filmes = filme.value

const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
}

fetch(`http://www.omdbapi.com/?t=${filmes}&apikey=cfc1236f`, options)
.then(function (response) {
    response.json()
        .then(function (data) {
            carregarFilme(data)
                
                               
        })
})

.catch((error) => {
    console.log(error);
});

const carregarFilme = (json) => {
    const lista = document.querySelector("div.filme");
    lista.innerHTML = "";

    json.Search.forEach(element => {
        console.log(element);

       let item = document.createElement("div");
       item.classList.add("item");

       item.innerHTML = `<img src="${element.Poster}" /><h2>${element.Title}</h2><h3>${element.Rated}</h3><h3>${element.Genre}</h3><h3>${element.Plot}</h3<h3>${element.imdbRating}</h3>></a>`;

       lista.appendChild(item);
    });
}