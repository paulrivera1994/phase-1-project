const form = document.getElementById("search-form");
const card = document.querySelector("#card");
const container = document.querySelector(".card-container");

//EVENT LISTENERS
//LOAD CARD CONTAINER AFTER DOM LOAD
document.addEventListener("DOMContentLoaded", preloadPlayers);
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  //FORM RESET
  form.reset();
}

//RENDER CARD
function renderOnePlayer(player) {
  //Build Player Card
  let card = document.createElement("li");
  card.className = "card";
  card.innerHTML = `
  <div class="content">
    <h4>${player.first_name} $${player.last_name}</h4>
    <p>
      <span class="position">${player.position}</span>Position Played
    </p>
    <p> Points per game:`;

  //CREATES A CLOSE BUTTON
  const closeButton = document.createElement("close-btn");
  newCard.append(closeButton);

  const closeIcon = document.createElement("img");
  closeIcon.className = "icon";
  closeIcon.src = "./media/xmark-solid.png";
  closeButton.append(closeIcon);
}

//DELETES WHOLE CARD WHEN ICON IS CLICKED
closeButton.addEventListener("click", (e) =>
  console.log(e.target.parentElement.parentElement.remove())
);

//Fetch request
function getPlayerId() {
  fetch(`https://www.balldontlie.io/api/v1/players?search=${player}`)
    .then((res) => res.json())
    .then((data) => json(data));
}

function getPlayerStats() {
  fetch(
    `https://www.balldontlie.io/api/v1/season_averages?season=${season}&${player}`
  );
}

//Initial Render
function initialize() {
  getPlayerId();
}
initialize();
