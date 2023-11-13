document.addEventListener('DOMContentLoaded', function () {
    const moviePlot = document.getElementById('moviePlot');
    const expandButton = document.getElementById('expandButton');

    if (moviePlot.scrollHeight > moviePlot.clientHeight) {
        expandButton.style.display = 'block';

        expandButton.addEventListener('click', function () {
            moviePlot.style.maxHeight = 'none';
            expandButton.style.display = 'none';
        });
    }

    const urlParams = new URLSearchParams(window.location.search);
    const selectedFilmTitle = urlParams.get('title');

    if (selectedFilmTitle) {
        const options = {
            method: 'get',
            mode: 'cors',
            cache: 'default'
        };

        fetch(`http://www.omdbapi.com/?t=${selectedFilmTitle}&apikey=f8e27f5f`, options)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                document.getElementById('movieTitle').textContent = data.Title || 'N/A';
                document.getElementById('moviePoster').src = data.Poster || 'placeholder.jpg';
                document.getElementById('movieRating').textContent = `Classificação: ${convertRating(data.Rated)}`;
                document.getElementById('movieGenre').textContent = `Gênero: ${data.Genre || 'N/A'}`;
                document.getElementById('moviePlot').textContent = `Sinopse: ${data.Plot || 'N/A'}`;

                if (data.Metascore) {
                    document.getElementById('metascore').textContent = `Nota: ${data.Metascore} /100`;
                } else {
                    document.getElementById('metascore').textContent = 'Nota: N/A';
                }

            })
            .catch(function (error) {
                console.error('Erro ao obter detalhes do filme:', error.message);
            });
    } else {
        console.error('Título do filme não encontrado na query string.');
    }

    function convertRating(rating) {
        switch (rating) {
            case 'G':
                return 'Classificação livre';
            case 'PG':
                return 'Orientação dos Responsáveis';
            case 'PG-13':
                return 'Classificação 14 anos';
            case 'R':
                return 'Classificação 16 anos';
            case 'NC-17':
                return 'Classificação 18 anos';
            default:
                return 'N/A';
        }
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const backButton = document.getElementById('backButton');
    if (backButton) {
        backButton.addEventListener('click', function () {
            const nomeparametros = new URLSearchParams(window.location.search);
            const nomeusuario = nomeparametros.get("nome");
            window.location.href = `sfilmes.html?nome=${nomeusuario}`;
        });
    }
});