const usuario = document.querySelector("#usuario");
const password = document.querySelector("#senha");
const botao = document.querySelector("#buscar");

botao.addEventListener("click", function (e) {
  let verificacao = false;
  let loginDigitado = usuario.value;
  let senhaDigitada = password.value;
  let nomeFilme = "";

  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  fetch(`ws/loginJson.json`, options)
    .then(function (response) {
      response.json()
        .then(function (data) {
          for (let i = 0; i < data.length; i++) {
            if (data[i].login == loginDigitado && data[i].senha == senhaDigitada) {
              nomeFilme = data[i].nome;
              verificacao = true;
              break;
            } else {
            }
          }

          if (verificacao == true) {
            window.open(`./filmes.html?usuario=${nomeFilme}`);
          }
        });
    })

    //se der errado faz outra coisa
    .catch(function (e) {
      console.log("Error:" + e.message);
    });
});
