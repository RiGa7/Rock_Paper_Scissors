document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice');
    const resultText = document.getElementById('result-text');
    const userChoiceElem = document.getElementById('user-choice');
    const computerChoiceElem = document.getElementById('computer-choice');
    const userScoreElem = document.getElementById('user-score');
    const computerScoreElem = document.getElementById('computer-score');
    const resetButton = document.getElementById('reset-button');

    let userScore = 0;
    let computerScore = 0;

    const emojiMap = {
        rock: '✊',
        paper: '✋',
        scissors: '✌️'
    };

    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            handleChoice(choice.id);
        });
        choice.addEventListener('touchstart', () => {
            handleChoice(choice.id);
        });
    });

    resetButton.addEventListener('click', () => {
        resetGame();
    });

    resetButton.addEventListener('touchstart', () => {
        resetGame();
    });

    function handleChoice(userChoice) {
        const computerChoice = getComputerChoice();
        const result = getResult(userChoice, computerChoice);
        updateGame(userChoice, computerChoice, result);
    }

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function getResult(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "It's a tie!";
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'scissors' && computerChoice === 'paper') ||
            (userChoice === 'paper' && computerChoice === 'rock')
        ) {
            return "You win!";
        } else {
            return "You lose!";
        }
    }

    function updateGame(userChoice, computerChoice, result) {
        resultText.textContent = result;
        userChoiceElem.innerHTML = `<i class="fas fa-hand-${userChoice}"></i>`;
        computerChoiceElem.innerHTML = `<i class="fas fa-hand-${computerChoice}"></i>`;
        resultText.classList.add('show');
        userChoiceElem.classList.add('show');
        computerChoiceElem.classList.add('show');
        updateScore(result);
        setTimeout(() => {
            resultText.classList.remove('show');
            userChoiceElem.classList.remove('show');
            computerChoiceElem.classList.remove('show');
        }, 2000);
    }

    function updateScore(result) {
        if (result === "You win!") {
            userScore++;
        } else if (result === "You lose!") {
            computerScore++;
        }
        userScoreElem.textContent = userScore;
        computerScoreElem.textContent = computerScore;
    }

    function resetGame() {
        userScore = 0;
        computerScore = 0;
        userScoreElem.textContent = userScore;
        computerScoreElem.textContent = computerScore;
        resultText.textContent = '';
        userChoiceElem.innerHTML = '';
        computerChoiceElem.innerHTML = '';
        resultText.classList.remove('show');
        userChoiceElem.classList.remove('show');
        computerChoiceElem.classList.remove('show');
    }
});
