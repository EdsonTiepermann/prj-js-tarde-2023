let getParametro = new URLSearchParams(window.location.search);
let nomeFilme = getParametro.get("tituloFilme");

const apikey = "5b3fd4b0";

const options = {
  method: "GET",
  mode: "cors",
  cache: "default",
};

fetch(`http://www.omdbapi.com/?t=${nomeFilme}&apikey=${apikey}`, options)
.then( function (response) {
    response.json()
    .then(function (data) {
      console.log(data);
      document.querySelector("#titulo").innerHTML = `<p>${data.Title}</p>`;
      document.querySelector("#nota").innerHTML = "Nota do filme :" +`<p>${data.Metascore}</p>`;
      document.querySelector("#sinopse").innerHTML = "Sinopse : " + `<p>${data.Plot}</p>`;
      document.querySelector("#genero").innerHTML = "Genero : " + `<p>${data.Genre}</p>`;
      document.querySelector("#class").innerHTML = "Classe : " + ` <p>${escolhaClassi(data.Rated)}</p>`;
      document.querySelector("#filmes").innerHTML = `<img src=${data.Poster}>`;
    });

    function escolhaClassi(classi) {
      switch (classi) {
          case "G":
              return "Classificação Livre";
          case "PG":
              return "Orientação dos Responsáveis";
          case "PG-13":
              return "Classificação 14 anos";
          case "R":
              return "Classificação 16 anos";
          case "NC-17":
              return "Classificação 18 anos";
          default:
              return "Classificação não disponível";
  }
   }
 });

 // Adicione um evento de clique ao botão
 document.getElementById("voltarBtn").addEventListener("click", function() {
    window.history.back(); // Isso voltará à página anterior no histórico do navegador
  });
