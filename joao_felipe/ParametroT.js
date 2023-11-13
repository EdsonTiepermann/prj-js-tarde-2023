
let prmtUrl = new URLSearchParams(window.location.search);
let infoFilmes = prmtUrl.get("nomefilme");



const Options = {
  method: "GET",
  mode: "cors",
  cache: "default",
};

fetch(`http://www.omdbapi.com/?t=${infoFilmes}&apikey=eca49c5b`, Options)
  .then(function (response) {
    response
      .json()

      .then(function (rtnFilmes) {
        console.log(rtnFilmes)



          document.querySelector("#inf").innerHTML += `${data.Search[index].rtnFilmes}`
        
      });
      
  })

  .catch(function (e) {
    console.log("ERROR: " + e.message);
  });
