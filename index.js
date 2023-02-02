// Variáveis para armazenar a escolha do jogador e do computador
let playerChoice;
let computerChoice;

// Função para escolher a jogada do computador
function getComputerChoice() {
  const choices = ['pedra', 'papel', 'tesoura'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Função para determinar o vencedor
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'Empate!';
  } else if (playerChoice === 'pedra') {
    if (computerChoice === 'tesoura') {
      return 'Jogador ganha!';
    } else {
      return 'Computador ganha!';
    }
  } else if (playerChoice === 'papel') {
    if (computerChoice === 'pedra') {
      return 'Jogador ganha!';
    } else {
      return 'Computador ganha!';
    }
  } else if (playerChoice === 'tesoura') {
    if (computerChoice === 'papel') {
      return 'Jogador ganha!';
    } else {
      return 'Computador ganha!';
    }
  }
}

// Evento de escolha do jogador
document.querySelector('.choices').addEventListener('click', function(event) {
  playerChoice = event.target.id;
  computerChoice = getComputerChoice();
  console.log('Jogador escolheu: ' + playerChoice);
  console.log('Computador escolheu: ' + computerChoice);
  console.log(determineWinner(playerChoice, computerChoice));
});