document.addEventListener('DOMContentLoaded', function () {
    const nomeparametros = new URLSearchParams(window.location.search);
    const nomeusuario = nomeparametros.get("nome");

    document.querySelector('#nomeTopo').innerHTML = `Seja Bem Vindo ${nomeusuario}`;

    const form = document.querySelector('.formLogin');

    if (form) {
        const filmeInput = document.querySelector('#filme');
        const resultsContainer = document.querySelector('#resultsContainer');

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            searchMovies();
        });

        function searchMovies() {
            let buscafilme = filmeInput.value;
            let type = 'movie';

            console.log('Buscando filme:', buscafilme);

            const options = {
                method: 'get',
                mode: 'cors',
                cache: 'default'
            };

            fetch(`http://www.omdbapi.com/?s=${buscafilme}&type=${type}&apikey=f8e27f5f`, options)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    resultsContainer.innerHTML = '';

                    if (data.Search) {
                        data.Search.forEach(function (movie) {
                            const movieCard = document.createElement('div');
                            movieCard.classList.add('movie-card');

                            const movieTitle = document.createElement('h2');
                            movieTitle.textContent = movie.Title;

                            const moviePoster = document.createElement('img');
                            moviePoster.src = movie.Poster;

                            movieCard.appendChild(movieTitle);
                            movieCard.appendChild(moviePoster);
                            resultsContainer.appendChild(movieCard);
                        });

                        document.body.classList.add('has-poster');
                        
                        document.querySelectorAll('.movie-card').forEach(function (card, index) {
                            card.addEventListener('click', function () {
                                const selectedMovie = data.Search[index];
                                const queryString = `?title=${encodeURIComponent(selectedMovie.Title)}&poster=${encodeURIComponent(selectedMovie.Poster)}&rating=${encodeURIComponent(selectedMovie.Rated)}&genre=${encodeURIComponent(selectedMovie.Genre)}&plot=${encodeURIComponent(selectedMovie.Plot)}`;
                                window.location.assign(`tfilmes.html${queryString}`);
                            });
                        });
                    } else {
                        console.log('Nenhum resultado encontrado.');
                        resultsContainer.innerHTML = 'Nenhum resultado encontrado.';
                    }
                })
                .catch(function (error) {
                    console.error('Erro:', error.message);
                });
        }
    } else {
        console.error('Elemento .formLogin não encontrado.');
    }
});