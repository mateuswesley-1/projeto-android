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
            linkClasse[j-1].style.background = 'red'
            elementoPergunta.style.display = 'block'
        }else{
            linkClasse[j-1].style.background = '#547890'
            elementoPergunta.style.display = 'none'
            
        }
    }
}