
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

let log = document.querySelector('#login')
let senhas = document.querySelector('#senha')
let botao = document.querySelector('#btn')

botao.addEventListener('click', function(e) {
    // let search = log.value 
    // let search2 = senha.value

    const options = {
        method: 'get',
        mode: 'cors',
        cache: 'default'
    }
    
    fetch(`ws/arquivoJson.json`, options)

        .then(function (response) {
            response.json()

                .then(function (data) {
                    // console.log(data)
                for (let i = 0; i < data.length; i++) {
                    // console.log(data[i].login)
                    if (log == data[i].login && senhas == data[i].senha  ){
                        alert('ok')
                    }
                    else{
                        alert('erro')
                    }

                        
                    
                    
                }
              });

        })

        .catch(function (e) {
            console.log('Error:' + e.message);
        })
    }
)




// window.open(`./filmes.html?nomeUsu=$VARIAVELUSU &senha`)