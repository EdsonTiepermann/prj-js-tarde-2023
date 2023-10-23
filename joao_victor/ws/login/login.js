
function cadastrar() {
    let nome = document.getElementById('nome').value
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;

    if (nome === "" || senha === "" || login === "") {
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
                    
                    if (login == data[0].login && senha == data[0].senha && nome == data[0].nome) {
                        alert('login bem sucedido!')
                        window.open(`pgprincipal.html?nomeUsu=${nome}&senha=${senha}`)
                    }
                    else if (login == data[1].login && senha == data[1].senha && nome == data[1].nome) {
                        alert('login bem sucedido!')
                        window.open(`pgprincipal.html?nomeUsu=${nome}&senha=${senha}`)
                    }
                    else if (login == data[2].login && senha == data[2].senha && nome == data[2].nome) {
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
