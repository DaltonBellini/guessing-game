alert('Iremos jogar um jogo de adivinhação')

let result = prompt('Adivinhe o número que estou pensando, está entre 0 e 10')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

while(Number(result) != randomNumber){ 
    result = prompt(`Você errou, tente novamente !`)
xAttempts++
}
alert(`Parabens você acertou em ${xAttempts} tentativas o numero é ${result}.`)