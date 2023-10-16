const options = {
  method: "GET",
  mode: "cors",
  cache: "default",
};

function showData(result) {
  // o for in  para tratarmos o objeto, o for in pega o resultado (result) e insere na variável campo
  for (const campo in result) {
    //nesse if verifico dinamicamente se todos os campos da api eu utilizo nos inputs
    if (document.querySelector("#" + campo)) {
      //Pegamos dinamicamente o elemento dos inputs e passamos o value dinamicamente, dizendo q o result é um arrayy e passando
      // a variável campo como posição
      document.querySelector("#" + campo).innerHTML = result[campo];
    }
    if (campo == "Poster") {
      document.querySelector("#" + campo).innerHTML =
        `<img id="${Poster}" src=${result[campo]} alt="Minha Figura">` + "<br>";
    }
  }
}

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("nomeFilme");
console.log(myParam);

fetch(`http://www.omdbapi.com/?t=${myParam}&apikey=1b6aee61`, options)
  .then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      showData(data);
    });
  })
  .catch(function (e) {
    console.log("Error: " + e.message);
  });
