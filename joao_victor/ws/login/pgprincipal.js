let uparams = new URLSearchParams(window.location.search);
let nomeUsuario = uparams.get('nomeUsu');
let nomeUsuarioSpan = document.getElementById("nomeUsuario");
nomeUsuarioSpan.textContent = nomeUsuario;


function busca() {
    const filme = document.getElementById("titulo").value;

    if (filme === "") {
        alert("Por favor, digite o nome do filme.");
        return;
    }
    const options = {
        method: 'get',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`http://www.omdbapi.com/?apikey=f450f23a&s=${filme}`, options)
        .then(function (response) {
            response.json()
                .then(function (data) {
                    console.log(data.Search[0].Poster)
                })
        })


        .catch(function (error) {
            console.error("Erro:", error);
            alert("ocorreu um erro.");
        });
}
