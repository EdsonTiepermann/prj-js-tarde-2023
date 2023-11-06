var loginDigitado = document.querySelector("#login")
var senhaDigitada = document.querySelector("#senha")
const botao = document.querySelector("#botao")
let verificacao = false;
let nome = "";

const showData = function(result){
    for(const campo in result) {
        console.log(campo)
        if (document.querySelector('#' + campo)){
            document.querySelector('#' + campo).value = result[campo]
        }
    }
}

botao.addEventListener('click', function (e) {
    e.preventDefault()

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
    }
    fetch('ws/senhaJson.json', options)

        .then(function (response) {
            response.json()

                .then(function(data) {
                    for (let i = 0; i < data.length; i++) {
                        if ((data[i].senha == senhaDigitada.value) && (data[i].login == loginDigitado.value)) {
                            nome = data[i].nome;
                            verificacao = true;
                            break; 
                        } else {
                            alert("Login ou senha incorretos");
                       }
                    }
                    if (verificacao == true) {
                        window.open(`./pesquisa.html?login=${nome}`);
                    }                      
                })
        })
        .catch((error) => {
            console.log(error);
        });
})