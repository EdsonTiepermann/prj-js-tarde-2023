const username = document.querySelector('#exampleFormControlInput1');
const password = document.querySelector('#senha');

const botao = document.querySelector('#logar')

botao.addEventListener('click', function (e) {

    let user = username.value;
    let pass = password.value;

    const Options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    
    fetch(`ws/loginJson.json`, Options)

        .then(function (response) {
            response.json()

                .then(function (data) {
                    let status = false;
                    let nome = "";

                    for (let index = 0; index < data.length; index++) {
                        if (data[index].login == user && data[index].senha == pass) {
                            status = true;
                            nome = data[index].nome;
                            break;
                        } else {
                            status = false;
                        }
                    }

                    if (status) {
                        alert('deu certo');
                        window.location.href = `pagInicial.html?nome=${nome}`;
                    } else {
                        alert('erro');
                    }
                })
        })

        .catch(function (e) {
            console.log('ERROR: ' + e.message);
            

        })

})