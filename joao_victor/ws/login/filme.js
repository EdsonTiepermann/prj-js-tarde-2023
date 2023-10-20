let uparams = new URLSearchParams(window.location.search);
let titulo = uparams.get('filme');

console.log(titulo)

const options = {
    method: 'get',
    mode: 'cors',
    cache: 'default'
}

fetch(`http://www.omdbapi.com/?apikey=f450f23a&t=${titulo}`, options)
    .then(function (response) {
        response.json()
            .then(function (data) {
                console.log(data)
                
            })
    })


    .catch(function (error) {
        console.error("Erro:", error);
        alert("ocorreu um erro.");
    });

