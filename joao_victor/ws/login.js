
function cadastrar() {
    var nome = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if (nome === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    fetch(`loginJson.json`)
    const options = {
        method:'get',
        mode:'cors',
        cache:'default',
    }
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Erro na requisição.");
            }
            return response.json();
        })
        .then(function (data) {
            if (data.login == cadastrar && data.senha == senha) {
                alert('login bem sucedido')
            } else {
                alert("Login ou senha incorretos. Tente novamente.");
            }
        })
        .catch(function (error) {
            console.error("Erro:", error);
            alert("Erro ao processar a requisição.");
        });
}
