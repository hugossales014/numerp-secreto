alert('Boas vindas ao jogo do número secreto');
let numeroMaximo= 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//Enquanto (while) o chute não for igual ao numero secreto
while (chute != numeroSecreto){
  chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
  // se (if) o chute for igual ao numero secreto
  if (chute == numeroSecreto) {
    break;
  //condição de chute adicionada a tentativas
  //senão (else)
  } else {
    if (chute > numeroSecreto){
      alert(`O número secreto é menor que ${chute}`);
    }
    else{
      alert(`O número secreto é maior que ${chute}`);
    }
    //tentativas= tentativas + 1
    tentativas++;
  }
}
let palavraTentativa= tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

