let uparams = new URLSearchParams(window.location.search);
let nomeUsuario = uparams.get('nomeUsu');
let nomeUsuarioSpan = document.getElementById("nomeUsuario");
nomeUsuarioSpan.textContent = nomeUsuario
;

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
                    console.log(data)
                    for (let i = 0; i < data.totalResults; i++) {
                        let imagemURL = data.Search[i].Poster
                    let imagem = document.createElement("img")
                    imagem.src = imagemURL
                    imagem.id = data.Search[i].Title
                    let titulo = imagem.id
                    imagem.addEventListener('click',function(){
                        window.open(`filme.html?filme=${titulo}`)
                    })
                    document.getElementById("posterdiv").appendChild(imagem)
                        
                    }
                    
                })
        })


        .catch(function (error) {
            console.error("Erro:", error);
            alert("ocorreu um erro.");
        });
}