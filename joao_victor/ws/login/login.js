
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
                    
                    if (nome == data[0].login && senha == data[0].senha) {
                        alert('login bem sucedido!')
                        window.open(`pgprincipal.html?nomeUsu=${nome}&senha=${senha}`)
                    }
                    else if (nome == data[1].login && senha == data[1].senha) {
                        alert('login bem sucedido!')
                        window.open(`pgprincipal.html?nomeUsu=${nome}&senha=${senha}`)
                    }
                    else if (nome == data[2].login && senha == data[2].senha) {
                        alert('login bem sucedido!')
                        window.open(`pgprincipal.html?nomeUsu=${nome}&senha=${senha}`)
                    }
                    else {
                        alert('login ou senha invalidos')
                    }

                })
        })


        .catch(function (error) {
            console.error("Erro:", error);
            alert("Erro ao processar a requisição.");
        });
}
