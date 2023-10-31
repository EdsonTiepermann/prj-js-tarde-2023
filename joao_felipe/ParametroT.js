let prmtUrl = new URLSearchParams(window.location.search);
let infFilmes = nameParameter.get("infFilmes");
    
    let infoFilmes = filmeInfs.value;

    const Options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`http://www.omdbapi.com/?t=$%7Bsearch%7D&apikey=eca49c5b`, Options)

        .then(function(response) {
            response.json()

                .then(function (inf) {
                    
                    for (let index = 0; index < inf.Search.length; index++) {
                        console.log(inf.Search[index])

                        document.querySelector('#inf').innerHTML 

                        
                    }


                })
        })

        .catch(function (e) {
            console.log('ERROR: ' + e.message);
            

        })



