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
                document.querySelector('#div').innerHTML = `<img src ="${data.Poster}">`
                document.querySelector('#ANO').innerHTML = `${data.Year}`
                document.querySelector('#nota').innerHTML = `${data.Metascore}`
                document.querySelector('#sin').innerHTML = `${data.Plot}`
                document.querySelector('#gen').innerHTML = `${data.Genre}`
                //  var classe = document.querySelector('#classi').innerHTML= `${data.Rated}`
                var classificação = `${data.Rated}`


                if (classificação == 'G') {
                    document.querySelector('#classi').innerHTML = 'livre'
                }
                if (classificação == 'PG') {
                    document.querySelector('#classi').innerHTML = 'Orientação aos responsáveis'
                }
                if (classificação == 'PG-13') {
                    document.querySelector('#classi').innerHTML = '14 anos'
                }
                if (classificação == 'R') {
                    document.querySelector('#classi').innerHTML = '16 anos'
                }
                if (classificação == 'NC-17') {
                    document.querySelector('#classi').innerHTML = '18 anos'
                }








                console.log(data)

            });
    })

    .catch(function (e) {
        console.log('Error:' + e.message);
    })