const options = {
  method: "GET",
  mode: "cors",
  cache: "default",
};

function showData(result) {
  for (const campo in result) {
    if (document.querySelector("#" + campo)) {
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

fetch(`http://www.omdbapi.com/?t=${myParam}&apikey=1b6aee61`, options)
  .then(function (response) {
    response.json().then(function (data) {
      showData(data);
    });
  })
  .catch(function (e) {
    console.log("Error: " + e.message);
  });
