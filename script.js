let tabuada = document.querySelector("#tabuada");

const gerador = document.querySelector("#gerador");

// --FUNÇÃO GERA TABUADA--
function geraTabuada() {
    
    let number = document.querySelector("#number").value;
    
    if (number == "" || number > 100 ){
        alert("DIGITE UM NUMERO VÁLIDO (1-100).");
    } else {
        
        let resultadoMulti = "";
        let tabuadatxt = document.querySelector("#tabuadatxt");

        gerador.classList.add('hide'); //Torna o gerador invisivel.
        tabuada.classList.remove('hide'); //Torna a tabuada visivel.

        for(i=1;i<=10;i++){
        
            let multi = (number * i);  //Cálculo da tabuada.
            
            let result = `${i} X ${number} = ${multi}`; //Define o conteúdo a ser imprimido em modo de tabuada na pagina.
            resultadoMulti += result + "<br/>"; //Concatena todos os resultados da repetição.
    
            tabuadatxt.innerHTML = resultadoMulti; //Preenche o espaço de tabuadatxt com o conteudo acumulado em resultadoMulti.
            
        }
    }
}
// --FUNÇÃO ATUALIZA A PAGINA--
function refreshPage() {
    location. reload();
}