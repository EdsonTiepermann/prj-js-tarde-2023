var botao = document.querySelector('#clicar')
function clica () {
    var log = document.getElementById('login').value
    var senha = document.getElementById('senha').value
   
        if (log =='admin' && senha=="admin" ) {
    
            // document.getElementById('res').innerHTML='caco'
            location.href='filme.html'
        //  alert('bat')
              
            
        }
         else {
            // document.getElementById('res').innerHTML = 'nada'
            window.alert('Senha incorreta')
        }
        
        

    }
     botao.addEventListener('click',clica )
    




















// function clicar () {
// var log = document.getElementById('login').value
// var senha = document.getElementById('senha').value
// var nome = 'luiz'
// var nome2 = 'maria'
//     if (log ==nome2 && senha==nome ) {
        
//         document.getElementById('res').value='caco'
          
        
//     }
//     else{
//         document.getElementById('res').value = 'nada'
//     }
    
// }


// document.getElementById('clicar').addEventListener('click', clicar)



