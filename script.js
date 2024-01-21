let userName = prompt("Enter You Name");
let user = document.querySelector(".user-name");
user.innerText = userName;
let userScore = 0;
let computerScore = 0;
let compChoice = ["Stone", "Paper", "Scissor"];
const playGame = (selectedItem) => {
  let index = Math.floor(Math.random() * 3);
  console.log(compChoice[index]);
  if (compChoice[index] === "Stone") {
    if (selectedItem === "Paper") {
      userScore += 1;
      document.querySelector(".score-user").innerText = userScore;
      document.querySelector(".msg").innerText = "You Won ! Bot Selects Stone";
      document.querySelector(".msg").style.backgroundColor = "green";
    } else if (selectedItem === "Scissor") {
      computerScore += 1;
      document.querySelector(".score-comp").innerText = computerScore;
      document.querySelector(".msg").innerText = "You Lost ! Bot Selects Stone";
      document.querySelector(".msg").style.backgroundColor = "red";
    } else {
      document.querySelector(".score-user").innerText = userScore;
      document.querySelector(".score-comp").innerText = computerScore;
      document.querySelector(".msg").innerText = "It Was a Draw";
      document.querySelector(".msg").style.backgroundColor = "darkslategrey";
    }
  }
  if (compChoice[index] === "Paper") {
    if (selectedItem === "Scissor") {
      userScore += 1;
      document.querySelector(".score-user").innerText = userScore;
      document.querySelector(".msg").innerText = "You Won ! Bot Selects Paper";
      document.querySelector(".msg").style.backgroundColor = "green";
    } else if (selectedItem === "Stone") {
      computerScore += 1;
      document.querySelector(".score-comp").innerText = computerScore;
      document.querySelector(".msg").innerText = "You Lost ! Bot Selects Paper";
      document.querySelector(".msg").style.backgroundColor = "red";
    } else {
      document.querySelector(".score-user").innerText = userScore;
      document.querySelector(".score-comp").innerText = computerScore;
      document.querySelector(".msg").innerText = "It  was a Draw";
      document.querySelector(".msg").style.backgroundColor = "darkslategrey";
    }
  }
  if (compChoice[index] === "Scissor") {
    if (selectedItem === "Stone") {
      userScore += 1;
      document.querySelector(".score-user").innerText = userScore;
      document.querySelector(".msg").innerText =
        "You Won ! Bot Selects Scissor";
      document.querySelector(".msg").style.backgroundColor = "green";
    } else if (selectedItem === "Paper") {
      computerScore += 1;
      document.querySelector(".score-comp").innerText = computerScore;
      document.querySelector(".msg").innerText =
        "You Lost ! Bot Selects Scissor";
      document.querySelector(".msg").style.backgroundColor = "red";
    } else {
      document.querySelector(".score-user").innerText = userScore;
      document.querySelector(".score-comp").innerText = computerScore;
      document.querySelector(".msg").innerText = "It  was a Draw";
      document.querySelector(".msg").style.backgroundColor = "darkslategrey";
    }
  }
};
let choices = document.querySelectorAll(".box");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    playGame(choice.innerText);
  });
});
