let getParametros = new URLSearchParams(window.location.search);
let nomeUsuario = getParametros.get("usuario");

document.querySelector("#saudacao").innerHTML = `Seja bem-vindo, ${nomeUsuario}`;

const botao = document.querySelector("#buscar");

const apikey = "5b3fd4b0";

// Função para limpar a área de resultados
function limparResultados() {
  document.querySelector("#filmesPoster").innerHTML = "";
}

botao.addEventListener("click", function (e) {
  limparResultados(); // Chame a função para limpar os resultados

  const filme = document.querySelector("#filme").value;
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  fetch(`http://www.omdbapi.com/?s=${filme}&apikey=${apikey}`, options)
    .then(function (response) {
      response.json().then(function (data) {
        for (let index = 0; index < data.Search.length; index++) {
          document.querySelector("#filmesPoster").innerHTML += `<a href="filme_especifico.html?tituloFilme=${data.Search[index].Title}"><img src="${data.Search[index].Poster}"></a>`;
        }
      });
    })
    .catch(function (e) {
      console.log("Error: " + e.message);
    });
});