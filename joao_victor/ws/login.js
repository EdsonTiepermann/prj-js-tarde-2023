
function cadastrar() {
    var nome = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if (nome === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const options = {
        method: 'get',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`loginJson.json`, options)

        .then(function (response) {
            response.json()
                .then(function (data) {
                    console.log(data)
                    for (let index = 0; index < data.length; index++) {
                        if (nome == data[index].login && senha == data[index].senha) {
                            alert ('login bem sucedido')
                            window.open (`pgprincipal.html?nomeUsu=${nome}&senha=${senha}`)
                        }
                        else {
                            alert ('login ou senha incorretos')
                        }
                        
                    }

                })
        })


        .catch(function (error) {
            console.error("Erro:", error);
            alert("Erro ao processar a requisição.");
        });
}
