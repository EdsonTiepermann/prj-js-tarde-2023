let buscarfilme = document.querySelector('#buscafilme')
let botao = document.querySelector('#btn')

const showData = function (result) {
    // o for in para tratarmos um objeto, o for in pega o resultado (result)
    // e inserer na variável campo
    for (const campo in result) {
        //nesse if é verificado dinamicamente se todos os campos da api
        // eu utilizo nos inputs
        if (document.querySelector('#' + campo)) {
            //pegamos dinamicamnete o elemneto dos inputs e passamos o 
            // value dinamicamnete, dizendo que o result é um array e passando
            // a variável campo como posição
            document.querySelector('#' + campo).value = result[campo]
            //console.log(campo);
        }
    }
}




botao.addEventListener('click', function(e) {
    let search = buscarfilme.value 
    location.href='filme.html'



    const options = {
        method: 'get',
        mode: 'cors',
        cache: 'default'
    }
    
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=f450f23a`, options)

        .then(function (response) {
            response.json()
              
                .then(function (data) {
                
                    console.log(data)
                        // showData(data.result)

                        
                    
                    
            
              });

        })

        .catch(function (e) {
            console.log('Error:' + e.message);
        })
    }
)




// window.open(`./filmes.html?nomeUsu=$VARIAVELUSU &senha`)