let buscarfilme = document.querySelector('#buscafilme')
let botao = document.querySelector('#btn')

 const showData = function (results) {
//     // o for in para tratarmos um objeto, o for in pega o resultado (result)
//     // e inserer na variável campo
    for (const campo in results) {
//         //nesse if é verificado dinamicamente se todos os campos da api
//         // eu utilizo nos inputs
         if (document.querySelector('#' + campo)) {
//             //pegamos dinamicamnete o elemneto dos inputs e passamos o 
//             // value dinamicamnete, dizendo que o result é um array e passando
//             // a variável campo como posição
            document.querySelector('#' + campo).value = results[campo]
           console.log(campo);
             }
    }
}




botao.addEventListener('click', function(e) {
    let search = buscarfilme.value 



    const options = {
        method: 'get',
        mode: 'cors',
        cache: 'default'
    }
    
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=f450f23a`, options)

        .then(function (response) {
            response.json()
              
                .then(function (data) {
                    for (let i = 0; i < data.length; i++) {
                          let buscarfilme = data[i].Poster
                        if (search == buscarfilme) {
                            document.querySelector('listaf').innerHTML= data
                            
                        } else {
                            
                        }
                        
                    }
                
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