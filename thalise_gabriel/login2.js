var login = document.querySelector("#login")
var senha = document.querySelector("#senha")
const botao = document.querySelector("#botao")

botao.addEventListener('click', function (e) {
    alert('teste')

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
                })
        })

        .catch((error) => {
            console.log(error);
        });
})