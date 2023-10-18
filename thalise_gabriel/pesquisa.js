var filme = document.querySelector("#filme")
const botao = document.querySelector("#botao")

botao.addEventListener('click', function (e) {
    let filmes = filme.value
e.preventDefault()
const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
}
alert(filmes)
fetch(`http://www.omdbapi.com/?s=${filmes}&apikey=cfc1236f`, options)
.then(function (response) {
    response.json()
        .then(function (data) {
            console.log(data)                       
        })
})

.catch((error) => {
    console.log(error);
});
})