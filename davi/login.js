var login = document.querySelector('#login')
var senha = document.querySelector('#senha')

const submit = document.querySelector('#botao')

submit.addEventListener('click', function(e) {
    e.preventDefault()

    //alert("texto qualquer")
    const options ={
        method: 'get',
        mode: 'cors',
        cache: 'default'
        
    } 
    fetch(`ws/loginJson.json`, options)
    .then(function(response) {
        
        response.json()

        .then(function(data) {
            console.log(data);
        })
    })
    .catch(function(e) {
        console.log('Error: ' + e.message);
})

})
//window.open(`./filmes.html?nomeUsu=${variavelUsuario}&senha=${variavelSenha}`);
