const urlParams = new URLSearchParams(window.location.search);
const nomeParams = urlParams.get("nomeUsuario");
document.querySelector("#usuario").innerHTML += nomeParams;

function limparInput() {
  document.getElementById("filtro").value = "";
}

function showData(listaFilme) {
  if (listaFilme.Response !== "False") {
    document.querySelector("#inicial").style.display = "none";
    document.getElementById("object").innerHTML = "";

    for (let index = 0; index < listaFilme.Search.length; index++) {
      document.getElementById(
        "object"
      ).innerHTML += `<img id="${listaFilme.Search[index].Title}" class="qtdf" src=${listaFilme.Search[index].Poster} alt="Minha Figura"></img>`;
    }
    var elementos = document.querySelectorAll(".qtdf");

    [].forEach.call(elementos, function (el) {
      el.addEventListener("click", function (evento) {
        window.location.href = `./poster.html?nomeFilme=${el.id}`;
      });
    });
  } else {
    null;
  }
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
