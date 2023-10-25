let titulo = document.getElementById('Title')
let ano = document.getElementById('Year')
// let poster = document.getElementById('imagem')

















  
const options = {
    method: 'get',
    mode: 'cors',
    cache: 'default'
 
}


fetch(`http://www.omdbapi.com/?t=&apikey=f450f23a`, options)


.then(function (response) {
    response.json ()
    

.then(function (data) {
    for (let i = 0; i < data.length; i++) {
        let verposter = data.Search[i].Poster;
        let verfilme = data.Search[i].Title;

        document.querySelector('#imagem').innerHTML += `<img src="${verposter}">`
    console.log(data)

      
  }


 


    
})
})


.catch(function (e) {
    console.log('Error:' + e.message)

})
 
