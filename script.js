const comchoice = ["rock", "paper", "scissor"];
const Rock = document.querySelector('#Rock');
const Paper = document.querySelector('#Paper');
const Scissor = document.querySelector('#Scissor');
const result = document.querySelector('#system');
const player = document.querySelector('#player');
const com = document.querySelector('#Com');
const imageP = document.createElement('h1');
const imageC = document.createElement('h1');
const styleC = document.createElement('style');
const styleP = styleC.cloneNode(true);
player.appendChild(imageP);
com.appendChild(imageC);
player.appendChild(styleP);
com.appendChild(styleC);

function getComputerChoice(){
    let selected = comchoice[Math.floor(Math.random() * comchoice.length)];
    if (selected == "scissor"){
        imageC.textContent = "✂️";
    }
    else if (selected == "paper"){
        imageC.textContent = "📄";
    }
    else if (selected == "rock"){
        imageC.textContent = "🪨";
    };
    return selected;
};
function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){
        result.innerHTML = "<h3>It's a Tie</h3>";
    }
    else if(computerSelection == "paper" && playerSelection == "rock"){
        result.innerHTML = "<h3>You lose</h3>";
    }
    else if(computerSelection == "scissor" && playerSelection == "rock"){
        result.innerHTML = "<h3>You win</h3>";
    }
    else if(computerSelection == "paper" && playerSelection == "scissor"){
        result.innerHTML = "<h3>You win</h3>";
    }
    else if(computerSelection == "rock" && playerSelection == "scissor"){
        result.innerHTML = "<h3>You lose</h3>";
    }
    else if(computerSelection == "rock" && playerSelection == "paper"){
        result.innerHTML = "<h3>You win</h3>";
    }
    else if(computerSelection == "scissor" && playerSelection == "paper"){
        result.innerHTML = "<h3>You lose</h3>";
    };   
  };
  Paper.addEventListener('click', () => {
    let playerSelection = "paper";
    const computerSelection = getComputerChoice();
    imageP.textContent= "📄";
  console.log(playRound(playerSelection, computerSelection));
});
Scissor.addEventListener('click', () => {
    let playerSelection = "scissor";
    const computerSelection = getComputerChoice();
    imageP.textContent = "✂️";
  console.log(playRound(playerSelection, computerSelection));
});
Rock.addEventListener('click', () => {
    let playerSelection = "rock";
    const computerSelection = getComputerChoice();
    imageP.textContent = "🪨";
  console.log(playRound(playerSelection, computerSelection));
});