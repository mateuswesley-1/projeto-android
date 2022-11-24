/* Recebe o id da pergunta e usa esse id para pegar a section 
associada a pergunta e muda o display dela*/

function abrirPergunta(idPergunta){

    // Número da pergunta que queremos que seja exibida
    let i = idPergunta.slice(-1)

    // Percorremos todas as perguntas usando número que tem 
    // final do id de cada pergunta
    for(j=1; j<=9; j++){
        let elementoPergunta = document.getElementById(`pergunta${j}`)
        //todos os botoes
        let linkClasse = document.getElementsByClassName('botaoMenu')
        
        if(j==i){
            elementoPergunta.style.display = 'block'
        }else{
            elementoPergunta.style.display = 'none'
            
        }

        if(itens.style.display == 'none'){
            itens.style.display = 'block'
        }else{
            itens.style.display = 'none'
        }
    }
}

var i=0;
function cliqueMenu(){
    /*
    Parabens pela criatividade mas q bosta kkkkkk
    if(i%2==0){
        itens.style.display = 'block'
    }else{
        itens.style.display = 'none'
    }
    i+=1
    */
    if(itens.style.display == 'none'){
        itens.style.display = 'block'
    }else{
        itens.style.display = 'none'
    }

}