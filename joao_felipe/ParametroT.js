
let infFilmes = nameParameter.get("infFilmes");

    let infoFilmes = filmeInfs.value;

    const Options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`http://www.omdbapi.com/?t=${infoFilmes}&apikey=eca49c5b`, Options)

        .then(function(response) {
            response.json()

                .then(function (inf) {
                    
                    for (let index = 0; index < inf.Search.length; index++) {
                        console.log(inf.Search[index])

                        document.querySelector('#inf').innerHTML += `<a href="ParametroT.HTML"><img src="${data.Search[index].Inf}"></a>`
                    }


                })
        })

        .catch(function (e) {
            console.log('ERROR: ' + e.message);
            

        })



