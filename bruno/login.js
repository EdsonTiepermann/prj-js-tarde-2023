const usuario = document.querySelector("#usuario").value;
// Pegamos o elemento do input cep
const password = document.querySelector("#senha").value;

const botao = document.querySelector("#buscar");

botao.addEventListener("click", function (e) {
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  fetch(`ws/loginJson.json`, options)
    .then(function (response) {
      response
        .json()

        .then(function (data) {
          for (let i = 0; i < data.length; i++) {
            if (data[i].login == usuario && data[i].senha == password) {
              window.open(`./filmes.html?usuario=${data[i].nome}`);
              alert("pegue no meu e balance");
            } else {
            }
          }
        });
    })

    //se der errado faz outra coisa
    .catch(function (e) {
      console.log("Error:" + e.message);
    });
});
