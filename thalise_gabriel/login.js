const form = {
    login: document.querySelector("#login"),
    senha: document.querySelector("#senha")
  };
  const botao = document.querySelector("#botao")
  
    botao.addEventListener('click',function(e)
    {
            const options = {
                method:'GET',
                mode:'cors',
                cache:'default'   
            }
    fetch('.../ws/loginJson.json', options)
    .then(function(response) {
        response.json()
        .then(function(data) {
            showData(data)
            console.log(data)
        })
    })
        if (data.error) {
          alert("Login ou senha incorretos");
        } else {
          window.open(
            "pesquisa.html"
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });