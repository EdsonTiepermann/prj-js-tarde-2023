let botao = document.querySelector('#btn')
let ver = document.querySelector('#poster')

botao.addEventListener('click', function(e) {
 let search= ver.value


    const options = {
        method: 'get',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`http://img.omdbapi.com/?apikey=[f450f23a]&${search}`)
    // fetch(`http://www.omdbapi.com/?t=${search}&apikey=f450f23a`, options)

        .then(function (response) {
            response.json()

                .then(function (data){
                    console.log(data)

            
                        
                    
                    
            
              });

        })

        .catch(function (e) {
            console.log('Error:' + e.message);
        })
    }
)




// window.open(`./filmes.html?nomeUsu=$VARIAVELUSU &senha`)













