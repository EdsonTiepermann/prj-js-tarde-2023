let filmeParametro = new URLSearchParams(window.location.search);
let tituloFilme = filmeParametro.get('titulo');


const options = {
    method: "GET",
    mode: "cors",
    cache: "default"
};

fetch(`https://www.omdbapi.com/?t=${tituloFilme}&apikey=cfc1236f`, options)
    .then(response => response.json())
    .then(data => {
        if (data) {
            console.log(data);
            document.querySelector("#titulo").innerHTML = data.Title ? `<p>${data.Title}</p>` : '';
            document.querySelector("#nota").innerHTML = data.Metascore ? `<p>${data.Metascore}</p>` : '';
            document.querySelector("#plot").innerHTML = data.Plot ? `<p>${data.Plot}</p>` : '';
            document.querySelector("#genero").innerHTML = data.Genre ? `<p>${data.Genre}</p>` : '';
            if (data.Poster) {
                document.querySelector("#poster").innerHTML = `<img src="${data.Poster}" alt="${data.Title}">`;
            }
        }
    });
