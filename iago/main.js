function showData(listaFilme) {
  document.querySelector("#inicial").style.display = "none";

  for (let index = 0; index < listaFilme.Search.length; index++) {
    document.getElementById(
      "object"
    ).innerHTML += `<img id="${listaFilme.Search[index].Title}" class="qtdf" src=${listaFilme.Search[index].Poster} alt="Minha Figura"></img>`;
    // + listaFilme.Search[index].Title
  }
  var elementos = document.querySelectorAll(".qtdf");
  // alert('teste');
  [].forEach.call(elementos, function (el) {
    el.addEventListener("click", function (evento) {
      // evento.preventDefault();
      console.log(el.id);
      window.location.href = `./poster.html?nomeFilme=${el.id}`;
    });
    // whatever with the current node
  });
  console.log(elementos.length);
}

// criar ID para receber Search[index].Title

function getFilmes(search) {
  axios
    .get(`http://www.omdbapi.com/?s=${search}&apikey=1b6aee61`)
    .then(function (response) {
      for (let index = 0; index < response.data.Search.length; index++) {
        document.querySelector(
          "#filme"
        ).innerHTML += `<li class="teste" id="${response.data.Search[index].Title}"> ${response.data.Search[index].Title}<br></li>`;
      }

      var elementos = document.querySelectorAll(".poster");
      forEach.call(elementos, function (elemento) {
        elemento.addEventListener("click", function (evento) {
          evento.preventDefaut();
          window.location.href = `./poster.html?nome=${elemento.id}`;
        });
      });
    });
}

document.querySelector("#buscar").addEventListener("click", function (e) {
  const filtro = document.querySelector("#filtro");

  const botao = document.querySelector("#buscar");

  let search = filtro.value.replace("-", "");
  // getFilmes(search);
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  fetch(`http://www.omdbapi.com/?s=${search}&apikey=1b6aee61`, options)
    .then(function (response) {
      response.json().then(function (data) {
        showData(data);
      });
    })
    .catch(function (e) {
      console.log("Error: " + e.message);
    });

  console.log(search);
});
