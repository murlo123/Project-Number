// geração do valor aleatório
var y = Math.floor(Math.random() * 10 + 1);
var x = document.getElementById("guessField").value;
var guess = 1

function submit()
{
    if(x==y){
        alert("Parabéns!!!"+playername+", você acertou em"+ guess + "tentava(s)! ");
        guess=1;
    }
    else if (x > y)
    {
    guess++;
    alert("Opa, resposta errada,Tente um numero menor")
    }
    else
    {
     guess++;
     alert("Opa, resposta errada,Tente um numero maior")
    }
}

function playAgain(){
    y = Math.floor(Math.random() * 10 + 1)
}
// contagem de tentativas
// até acerto    
  
// função para o número enviado pelo usuário
