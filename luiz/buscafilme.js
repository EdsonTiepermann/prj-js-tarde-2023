let buscarfilme = document.querySelector('#filme')
let botao = document.querySelector('#btn')
// let nomef = document.getElementById('Title')
// let anof = document.getElementById('Year')


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


                    // console.log(data.Search)


                    for (let i = 0; i < data.Search.length; i++) {
                          let verposter = data.Search[i].Poster;
                          let verfilme = data.Search[i].Title;
                          let verano = data.search[i].Year
                          let imagem = document.createElement('img')
                          imagem.id
                

                          document.querySelector('#item').innerHTML += `<a href="filme.html?filme=${verfilme}"><img src="${verposter}">></a>`
                          document.querySelector('#item').innerHTML += `<a href="filme.html?ano=${verano}">`
                        //   window.open(`./filme.html?filme=${verfilme}`)
    

                        
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