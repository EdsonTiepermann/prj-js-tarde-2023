let nameParameter = new URLSearchParams(window.location.search);
let nomeUsuario = nameParameter.get("nome");

document.querySelector('#saudacao').innerHTML = `Seja bem vindo ${nomeUsuario}`


const filmePesquisa = document.querySelector("#procurar");
const botao = document.querySelector("#buscar");


botao.addEventListener('click', function (e) {
    
    let nomeFilme = filmePesquisa.value;

    const Options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`http://www.omdbapi.com/?s=${nomeFilme}&apikey=eca49c5b`, Options)

        .then(function(response) {
            response.json()

                .then(function (data) {
                    
                    for (let index = 0; index < data.Search.length; index++) {
                        console.log(data.Search[index])

                        document.querySelector('#poster').innerHTML += `<a href="ParametroT.HTML"><img src="${data.Search[index].Poster}"></a>`

                      
                    }


                })
        })

        .catch(function (e) {
            console.log('ERROR: ' + e.message);
            

        })

})