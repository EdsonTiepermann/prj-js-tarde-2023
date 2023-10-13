let botao = document.getElementById('btnfilmes')


botao.addEventListener('click', function(e) {
    let search = botao.value 



    const options = {
        method: 'get',
        mode: 'cors',
        cache: 'default'
    }
    
    fetch(`http://www.omdbapi.com/?t=${search}&apikey=f450f23a`, options)

        .then(function (response) {
            response.json()

                .then(function () {

            

                        
                    
                    
            
              });

        })

        .catch(function (e) {
            console.log('Error:' + e.message);
        })
    }
)




// window.open(`./filmes.html?nomeUsu=$VARIAVELUSU &senha`)













fetch(`http://www.omdbapi.com/?apikey=[c82a5046]&`)