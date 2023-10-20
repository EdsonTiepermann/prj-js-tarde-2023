let buscarfilme = document.querySelector('#filme')
let botao = document.querySelector('#btn')
let item = document.getElementById('divitem')


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
    let search2 = item.value

    const options = {
        method: 'get',
        mode: 'cors',
        cache: 'default'
    }
    
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=f450f23a`, options)

        .then(function (response) {
            response.json()
              
                .then(function (data) {
                    const lista = document.getElementById('divlista')
                    console.log(data)


                    for (let i = 0; i < data.length; i++) {
                        let buscarp = data[i].Poster                 
                        if (search == showData && search2 == showData) {
                            search2.innerHTML =`<img src "${data[i].Poster}" /><h2>${data[i].Title}</h2>`
                            lista.appendChild(item)
                        } else {
                            
                        }
                        
                    }
                
                    
                        // showData(data.result)

                        
                    
                    
            
              });

        })

        .catch(function (e) {
            console.log('Error:' + e.message);
        })
    }
)




// window.open(`./filmes.html?nomeUsu=$VARIAVELUSU &senha`)