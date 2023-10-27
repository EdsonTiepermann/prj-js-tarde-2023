let nomeParametro = new URLSearchParams(window.location.search);
let titulo = nomeParametro.get('filme')


alert(titulo)




const options = {
    method: 'get',
    mode: 'cors',
    cache: 'default'
}
fetch(`http://www.omdbapi.com/?t=${titulo}&apikey=f450f23a`, options)

    .then(function (response) {
        response.json()

            .then(function (data) {
                
                document.querySelector('#esse').innerHTML = `${titulo}`
                document.querySelector('#h3').innerHTML = `${data.Title}`
                document.querySelector('#div2').innerHTML =  `<img src ="${data.Poster}">`
                document.querySelector('#ANO').innerHTML = `${data.Year}`
                document.querySelector('#nota').innerHTML = `${data.Rated}`
                document.querySelector('#sin').innerHTML = `${data.Plot}`
                document.querySelector('#gen').innerHTML = `${data.Genre}`
            
               

                
               
                
                console.log(data)

            });
    })

    .catch(function (e) {
        console.log('Error:' + e.message);
    })