let userScore = 0;
let compScore = 0;
const userScoreSpan = document.querySelector("#userScore");
const compScoreSpan = document.querySelector("#computerScore");
const scoreBoardDiv = document.querySelector(".scoreboard");
const resultP = document.querySelector(".result > p");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorDiv = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randNum = Math.floor(Math.random() * choices.length);
  return choices[randNum];
}
const convertWord = (letter) => {
  if (letter == "r") {
    return "Rock";
  }
  if (letter == "p") {
    return "Paper";
  }

  if (letter == "s") {
    return "Scissors";
  }
};
const lose = (userChoice, computerChoice) => {
  compScore++;
  userScoreSpan.innerText = userScore;
  compScoreSpan.innerText = compScore;
  const smallUserWord = "user".fontsize(3.3).sub();
  const compUserWord = "comp".fontsize(3.3).sub();
  const userChoiceDiv = document.getElementById(userChoice);

  userChoiceDiv.classList.add("redGlow");

  setTimeout(() => {
    document.getElementById(userChoice).classList.remove("redGlow");
  }, 500);

  resultP.innerHTML = `${convertWord(
    computerChoice
  )}${compUserWord} beats ${convertWord(
    userChoice
  )}${smallUserWord}  YOU LOST!!!!`;
};

const win = (userChoice, computerChoice) => {
  const compUserWord = "comp".fontsize(3.3).sub();
  const smallUserWord = "user".fontsize(3.3).sub();
  userScore++;
  userScoreSpan.innerText = userScore;
  compScoreSpan.innerText = compScore;
  const userChoiceDiv = document.getElementById(userChoice);

  userChoiceDiv.classList.add("greenGlow");

  setTimeout(() => {
    document.getElementById(userChoice).classList.remove("greenGlow");
  }, 500);

  resultP.innerHTML = `${convertWord(
    userChoice
  )}${smallUserWord} beats ${convertWord(
    computerChoice
  )}${compUserWord}  YOU WIN!!!!`;
};

const draw = (userChoice, computerChoice) => {
  const smallUserWord = "user".fontsize(3.3).sub();
  const compUserWord = "comp".fontsize(3.3).sub();
  const userChoiceDiv = document.getElementById(userChoice);

  userChoiceDiv.classList.add("greyGlow");

  setTimeout(() => {
    document.getElementById(userChoice).classList.remove("greyGlow");
  }, 500);
  resultP.innerHTML = `${convertWord(
    userChoice
  )}${smallUserWord} equals ${convertWord(
    computerChoice
  )}${compUserWord}  IT'S A DRAW!!!!`;
};

const Game = (userChoice) => {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "sr":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
};

const main = () => {
  rockDiv.addEventListener("click", () => {
    Game("r");
  });

  paperDiv.addEventListener("click", () => {
    Game("p");
  });

  scissorDiv.addEventListener("click", () => {
    Game("s");
  });
};

main();
