const urlParams = new URLSearchParams(window.location.search);
const nomeParams = urlParams.get("nomeUsuario");
document.querySelector("#usuario").innerHTML += nomeParams;

function limparInput() {
  document.getElementById("filtro").value = "";
}

function showData(listaFilme) {
  document.querySelector("#inicial").style.display = "none";

  for (let index = 0; index < listaFilme.Search.length; index++) {
    document.getElementById(
      "object"
    ).innerHTML += `<img id="${listaFilme.Search[index].Title}" class="qtdf" src=${listaFilme.Search[index].Poster} alt="Minha Figura"></img>`;
  }
  var elementos = document.querySelectorAll(".qtdf");

  [].forEach.call(elementos, function (el) {
    el.addEventListener("click", function (evento) {
      console.log(el.id);
      window.location.href = `./poster.html?nomeFilme=${el.id}`;
    });
  });
  console.log(elementos.length);
}

document.querySelector("#buscar").addEventListener("click", function (e) {
  const filtro = document.querySelector("#filtro");

  let search = filtro.value.replace("-", "");

  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  fetch(`http://www.omdbapi.com/?s=${search}&apikey=1b6aee61`, options)
    .then(function (response) {
      response.json().then(function (data) {
        showData(data);
        limparInput();
      });
    })
    .catch(function (e) {
      console.log("Error: " + e.message);
    });
});
