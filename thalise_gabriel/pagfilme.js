let nomeParametro = new URLSearchParams(window.location.search);
let filmeInfo = nomeParametro.get('filme')

const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
}

fetch(`http://www.omdbapi.com/?t=${filmeInfo}&apikey=cfc1236f`, options)
.then(function (response) {
    response.json()

        .then(function (data) {
            const filmeInfos = (json) => { 
            json.Search.forEach(element => {
                console.log(element);

            let item = document.createElement("div");
            item.classList.add("item");

            item.innerHTML = `<img src="${element.Poster}"/><h2>${element.Title}</h2>`;

            console.log(data)
            
        });
    }
})
})
.catch(function (e) {
    console.log('Error:' + e.message);
})
