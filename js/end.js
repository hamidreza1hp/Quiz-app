const score = JSON.parse(localStorage.getItem("score"));
const highScore = JSON.parse(localStorage.getItem("highScore")) || [];

const scoreElement = document.querySelector("p");
const input = document.querySelector("input");
const button = document.querySelector("button");

scoreElement.innerText = score;

const saveHandler = () => {
  if (!input.value || !score) {
    alert("Invalid username or score");
  } else {
    const finalScore = { name: input.value, score: score };
    JSON.stringify(localStorage.setItem("highScore", score));
    highScore.push(finalScore);
    highScore.sort((a, b) => b.score - a.score);
    localStorage.setItem("highScore", JSON.stringify(highScore));
    localStorage.removeItem("score");
    window.location.assign("/");
  }
};

button.addEventListener("click", saveHandler);
