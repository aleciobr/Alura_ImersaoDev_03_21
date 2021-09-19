var numeroAle = parseInt(Math.random() * 11);
var tentativas = 0;
function Chutar(){
    var chute = parseInt(document.getElementById("valor").value);
    var resultadoChute = document.getElementById("resultado");
    var chance = document.getElementById("chance")
    tentativas += 1;
    if(chute == numeroAle){
        
        var acertou = "Você acerto o numero "+ numeroAle;
        resultadoChute.innerHTML = acertou;
        var cha = "Você tentou " + tentativas;
        chance.innerHTML = cha;
    }else if(chute >= 11 || chute < 0){
        var certo ="Digite um numero entre 0 e 10!";
        resultadoChute.innerHTML = certo;
    }else if(chute < numeroAle){
        var errou = "Você errou o numero é maior";
        resultadoChute.innerHTML = errou;    
    }else if(chute > numeroAle){
        var errou = "Você errou o numero é menor";
        resultadoChute.innerHTML = errou;     
    }
}

// O == ele pode retorna um valor com aspas tipo 10 e "10" é considerado valores iguais
// Já o === ele só considera o valor verdadeiro que é atribuido a ele, se x recebe 10 então x === 10(true) e se no caso for x === "10" (False)