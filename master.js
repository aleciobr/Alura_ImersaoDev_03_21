var numeroAle = parseInt(Math.random() * 11);

function Chutar(){
    var chute = parseInt(document.getElementById("valor").value);
    var resultadoChute = document.getElementById("resultado");
    if(chute == numeroAle){
        var acertou = "Você acerto o numero "+ numeroAle;
        resultadoChute.innerHTML = acertou;
    
    }else if(chute >= 11 || chute < 0){
        var certo ="Digite um numero entre 0 e 10!";
        resultadoChute.innerHTML = certo;
    }else{
        var errou = "Você errou o numero";
        resultadoChute.innerHTML = errou;
    }

}

// O == ele pode retorna um valor com aspas tipo 10 e "10" é considerado valores iguais
// Já o === ele só considera o valor verdadeiro que é atribuido a ele, se x recebe 10 então x === 10(true) e se no caso for x === "10" (False)