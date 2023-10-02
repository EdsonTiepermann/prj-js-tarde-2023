var log = document.getElementById('login').value
var senha = document.getElementById('senha').value
var botao = document.getElementById('clicar')
var res = document.getElementById('res')

function clicar () {
    if (log > 4 && senha  >4 ) {
        
        document.getElementById(res).innerHTML='caco'

        
    }
    
}


botao.addEventListener('click', clicar)



