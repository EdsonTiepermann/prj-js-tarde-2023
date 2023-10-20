var login = document.querySelector('#login')
var senha = document.querySelector('#senha')

const submit = document.querySelector('#botao')

submit.addEventListener('click', function (e) {
    e.preventDefault()
    let searchl = login.value;
    let searchs = senha.value;

    //alert("texto qualquer")
    const options = {
        method: 'get',
        mode: 'cors',
        cache: 'default'

    }

    fetch(`ws/loginJson.json`, options)
        .then(function (response) {

            response.json()

                .then(function (data) {
                    //console.log(data);
                    for (let i = 0; i < data.length; i++) {
                        let login1 = data[i].login;
                        let senha1 = data[i].senha;
                        let nome = data[i].nome;
                       
                        if (searchl == login1 && searchs == senha1) {
                            //console.log(data[i].nome)
                            window.location.assign(`sfilmes.html?nome=${nome}`);
                            //location.href = `sfilmes.html?nome=${nome}`
                        } else {
                            alert('Dados Incorretos')
                        }
                    }




                })
        })
        .catch(function (e) {
            console.log('Error: ' + e.message);
        })

})
//window.open(`./filmes.html?nomeUsu=${variavelUsuario}&senha=${variavelSenha}`);
