var login = document.querySelector("#login")
var senha = document.querySelector("#senha")
const botao = document.querySelector("#botao")

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
                .then(function (data) {
                    console.log(data)
                    for (let i = 0; i < data.length; i++){
                        if (data[i].senha == senha.value & data[i].login == login.value) {
                            console.log(showData)
                            window.open(`./pesquisa.html?login=${login}&thagab=`);
                            break;
                        } else {
                            alert('Login ou senha incorretos')
                            break;
                       }
                    }                               
                })
        })

        .catch((error) => {
            console.log(error);
        });
})