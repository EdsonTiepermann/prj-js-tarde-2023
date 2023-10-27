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
                let titulo = document.getElementById('title')
                let valortitulo = data.Title
                titulo.textContent = valortitulo

                let titulo2 = document.getElementById('title2')
                titulo2.textContent = valortitulo

                let generofilme = document.getElementById('genero')
                let valorgenero = data.Genre
                generofilme.textContent = ('Gênero: ' + valorgenero)

                if (data.Rated == ('G')) {
                    let classificacaofilme = document.getElementById('classificacao')
                    classificacaofilme.textContent = ('Classificaçâo: Livre')
                }
                else if (data.Rated == ('PG')) {
                    let classificacaofilme = document.getElementById('classificacao')
                    classificacaofilme.textContent = ('Classificaçâo: Orientação dos Responsáveis')
                }
                else if (data.Rated == ('PG-13')) {
                    let classificacaofilme = document.getElementById('classificacao')
                    classificacaofilme.textContent = ('classificação: 14 anos')
                }
                else if (data.Rated == ('R')) {
                    let classificacaofilme = document.getElementById('classificacao')
                    classificacaofilme.textContent = ('classificação: 16 anos')
                }
                else if (data.Rated == ('NC-17')) {
                    let classificacaofilme = document.getElementById('classificacao')
                    classificacaofilme.textContent = ('classificação: 18 anos')
                }

                let sinopsefilme = document.getElementById('sinopse')
                let valorsinopse = data.Plot
                sinopsefilme.textContent = ('Sinopse: ' + valorsinopse)

                let posterfilme = document.getElementById('poster')
                let valorposter = data.Poster
                posterfilme.src = valorposter

                let notafilme1 = document.getElementById('nota-imdb')
                let notavalor1 = ('Nota Imdb: ' + data.Ratings[0].Value)
                notafilme1.textContent = notavalor1

                let notafilme2 = document.getElementById('nota-tomatoes')
                let notavalor2 = ('Nota rotten tomatoes: ' + data.Ratings[1].Value)
                notafilme2.textContent = notavalor2

                let notafilme3 = document.getElementById('nota-metacritics')
                let notavalor3 = ('Nota metacritics: ' + data.Ratings[2].Value)
                notafilme3.textContent = notavalor3
            })
    })


    .catch(function (error) {
        console.error("Erro:", error);
        alert("ocorreu um erro.");
    });

