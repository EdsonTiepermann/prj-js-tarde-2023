
let log = document.getElementById('login')
let senhas = document.getElementById('senha')
let botao = document.querySelector('#btn')
let item = document.getElementById('divlista')

botao.addEventListener('click', function(e) {
    let search = log.value 
    let search2 = senha.value



    const options = {
        method: 'get',
        mode: 'cors',
        cache: 'default'
    }
    
    fetch(`ws/loginJson.json`, options)

        .then(function (response) {
            response.json()

                .then(function (data) {
                    // console.log(data)
                for (let i = 0; i < data.length; i++) {
                    let valogin = data[i].login;
                    let vasenha = data[i].senha;
                    let nomes = data[i].nome;
                    // console.log(data[i].login)
                    if (search== valogin && search2 == vasenha  ){
                        // location.href = 'buscafilme.html'
                        alert('Login feito com sucesso')
                        window.open(`./buscafilme.html?nome=${nomes}`)
                    }

                    else{
                        alert('deu erro')
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