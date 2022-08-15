let person = prompt('Jogo da adivinhação, digite seu nome')
let result = prompt('Tente adivinhar o número que estou pensando entre 0 e 1')
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1
while(Number(result) != randomNumber){ 
    result = prompt('Você errou, tente novamente ! ')
    xAttempts++
}
alert(`Parabens ${person}, você conseguiu adivinhar o número que pensei depois de ${xAttempts} tentativas, o número: ${result}`)
