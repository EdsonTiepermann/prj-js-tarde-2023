
let anof = document.getElementById('Year')
let div = document.getElementById('div')
let imagem = document.getElementById('imagem')



// let nomeParametro = new URLSearchParams(window.location.search);

// let nomefilmes = nomeParametro.get('item')


// var nomeusuario = document.getElementById('#item').innerHTML= nomefilmes






const options = {
    method: 'get',
    mode: 'cors',
    cache: 'default'
}
fetch(`http://www.omdbapi.com/?t=&apikey=f450f23a`, options)

.then(function (response) {
    response.json()
      
        .then(function (data) {
           




            // console.log(data.Search)


            for (let i = 0; i < data.length; i++) {
                  let verposter = data[i].Poster;
                  let verfilme = data[i].Title;

                 if (verposter == div && verfilme== div) {
                    console.log(data)
                 } else {
                    
                 }
                
            }
        
            

            
        
            

                // showData(data.result)

                
            
            
    
      });

})

.catch(function (e) {
    console.log('Error:' + e.message);
})







