const form = document.getElementById("search-form");
const card = document.querySelector("#card");
const container = document.querySelector(".card-container");

//EVENT LISTENERS
//LOAD CARD CONTAINER AFTER DOM LOAD
// document.addEventListener("DOMContentLoaded", preloadPlayers);
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  console.log(form.value);

  //FORM RESET
  form.reset();
}
console.log(form.value);
//RENDER CARD
// function renderPlayerCard(
//   player,
//   season,
//   position,
//   points,
//   assists,
//   rebounds,
//   team
// ) {
//   //Creates Card after Submitting
//   const newCard = document.createElement("div");
//   newCard.id = "card";
//   container.append(newCard);

//   //CREATES A CLOSE BUTTON
//   const closeButton = document.createElement("close-btn");
//   newCard.append(closeButton);

//   const closeIcon = document.createElement("img");
//   closeIcon.className = "icon";
//   closeIcon.src = "https://www.svgimages.com/jpg/x-icon.html";
//   closeButton.append(closeIcon);
//   //DELETES WHOLE CARD WHEN ICON IS CLICKED
//   closeButton.addEventListener("click", (e) =>
//     console.log(e.target.parentElement.parentElement.remove())
//   );

//   //Creates Card Header via player info
//   const cardHeader = document.createElement("h3");
//   h3.textContent = player.first_name;
//   h3.className = "name";
//   cardHeader.append(h3);

//   const h4 = document.createElement("h4");
//   h4.textContent = player.full_name;
//   h4.className = "team_name";
// }
//Fetch requests
getPlayerId();
function getPlayerId(playerName = "lebron") {
  fetch(`https://www.balldontlie.io/api/v1/players?search=${playerName}`)
    .then((res) => res.json())
    .then((stat) => {
      const card = document.getElementById("card");
      const name = document.createElement("p");
      //console.log(stat.data[0]);
      name.textContent = stat.data[0].first_name + " " + stat.data[0].last_name;
      card.append(name);
    });
}
getPlayerStats();
function getPlayerStats(year = 2019, playerId = 237) {
  fetch(
    `https://www.balldontlie.io/api/v1/season_averages?season=${year}&player_ids[]=${playerId}`
  )
    .then((res) => res.json())
    .then((stats) => {
      const card = document.getElementById("card");
      const pts = document.createElement("p");
      const ast = document.createElement("p");
      const reb = document.createElement("p");
      const blk = document.createElement("p");
      //console.log(stats.data[0].pts);
      pts.textContent = `Points per game: ${stats.data[0].pts}`;
      ast.textContent = `Assists per game: ${stats.data[0].ast}`;
      reb.textContent = `Rebounds per game: ${stats.data[0].reb}`;
      blk.textContent = `Blocks per game: ${stats.data[0].blk}`;
      card.append(pts);
      card.append(ast);
      card.append(reb);
      card.append(blk);
    });
}

newCard();
function newCard() {
  const newCard = document.createElement("div");
  newCard.id = "card";
  container.append(newCard);
  document.body.append(container);
}
