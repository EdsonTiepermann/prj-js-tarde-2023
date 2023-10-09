
// function clica () {
//     var log = document.getElementById('login').value
//     var senha = document.getElementById('senha').value

//         if (log =='admin' && senha=="admin" ){

//             location.href="filme.html"


//         }
//          else {
//             // document.getElementById('res').innerHTML = 'nada'
//             alert('Senha incorreta')
//         }
// }


//     document.getElementById('clicar').addEventListener('click', clica)

var log = document.getElementById('login')
var senha = document.getElementById('senha')
let botao = document.getElementById('clicar')

botao.addEventListener('click', function(e) {
    // let search = log.value 
    // let search2 = senha.value

    const options = {
        method: 'get',
        mode: 'cors',
        cache: 'default'
    }

    // fetch(`luiz/ws/loginJson.json=${search}${search2}`, options)
    // fetch(`luiz/ws/loginJson.json`, options)
    
    fetch(`ws/arquivoJson.json`,options)

        .then(function (response) {
            response.json()

                .then(function (data) {
                    console.log(data);
                });

        })

        .catch(function (e) {
            console.log('Error:' + e.message);
        })

})