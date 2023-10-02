/** Aqui será a função de login **/

function logar() {
  var login = document.getElementById("login").value;
  var senha = document.getElementById("password").value;

  if (login == "iago" && senha == "123") {
    window.alert("sucesso");
    window.location.href = "index.html";
  } else {
    alert("usuario ou senha incorretos");
  }
}
