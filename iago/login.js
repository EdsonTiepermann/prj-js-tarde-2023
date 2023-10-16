/** Aqui será a função de login **/

function logar() {
  const login = document.getElementById("login").value;
  const senha = document.getElementById("password").value;

  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  fetch(`ws/loginJson.json`, options)
    .then(function (response) {
      response.json().then(function (result) {
        console.log(result);
        let verifica = false;
        let nome = "";

        for (let i = 0; i < result.length; i++) {
          if (login == result[i].login && senha == result[i].senha) {
            nome = result[i].nome;
            verifica = true;
            break;
          } else {
            verifica = false;
          }
        }

        if (verifica) {
          window.open(`searchPage.html?nomeUsuario=${nome}`);
        } else {
          alert("Login ou senha inválido.");
        }
      });
    })

    .catch(function (e) {
      console.log("Login ou senha inválidos: " + e.message);
    });
}
