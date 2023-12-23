const loader = document.getElementById("loader");
const container = document.getElementById("container");

const URL =
  "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";
let formattedData = null;

const fetchData = async () => {
  const response = await fetch(URL);
  const json = await response.json();
  formattedData = json;
  start();
};

const start = () => {
  loader.style.display = "none";
  container.style.display = "block";
};

window.addEventListener("load", fetchData);
