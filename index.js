const form = document.getElementById("search-form");
const card = document.querySelector("#card");
const container = document.querySelector(".card-container");
const player = document.getElementById("player");
const teams = document.getElementById("teams");
//const searchButton = document.getElementsByClassName("btn");
//const search = document.querySelector("input#search");
//EVENT LISTENERS
//LOAD CARD CONTAINER AFTER DOM LOAD
//document.addEventListener("DOMContentLoaded", preloadPlayers);
form.addEventListener("submit", handleSubmit);
function handleSubmit(e) {
  e.preventDefault();
  let newPlayerObj = {
    player: e.target.player.value,
    //tm: e.target.teams.value,
    team: teams.options[teams.selectedIndex].text,
    //teamStr: `${e.target.player.value.replace(" ", "-")}-${
    //  e.target.teams.value
    //}`.toLowerCase(),
  };
  //getPlayerId(e.target.player.value);
  //getPlayerStats(e.target.player.value);
  //RENDERS CARD TO PAGE
  getData(newPlayerObj, renderPlayerCard);
  //FORM RESET
  form.reset();
}
// RENDER NEW CARD
function renderPlayerCard(
  player,
  position,
  heightF,
  heightI,
  points,
  assists,
  rebounds,
  blocks
) {
  //Creates Card after Submitting
  const newCard = document.createElement("div");
  newCard.id = "card";
  container.append(newCard);
  //CREATES A CLOSE BUTTON
  const closeButton = document.createElement("div");
  closeButton.className = "close-btn";
  newCard.append(closeButton);
  const closeIcon = document.createElement("img");
  closeIcon.className = "icon";
  closeIcon.textContent = "X";
  //closeIcon.src = "https://www.svgimages.com/jpg/x-icon.html";
  closeButton.append(closeIcon);
  //DELETES WHOLE CARD WHEN ICON IS CLICKED
  closeButton.addEventListener("click", (e) =>
    console.log(e.target.parentElement.parentElement.remove())
  );
  const cardHeader = document.createElement("div");
  cardHeader.className = "card-header";
  const h3 = document.createElement("h3");
  h3.textContent = player.player;
  h3.className = "name";
  cardHeader.append(h3);

  const h4 = document.createElement("h4");
  h4.textContent = `${player.team}`;
  h4.className = "team";
  cardHeader.append(h4);

  newCard.append(cardHeader);
  //Seperation Line
  const hr = document.createElement("hr");
  newCard.append(hr);

  //Creates data div that populates with fetched info from API
  const dataDiv = document.createElement("div");
  const pointsP = document.createElement("p");
  const assistsP = document.createElement("p");
  const reboundsP = document.createElement("p");
  const blocksP = document.createElement("p");
  const heightFeet = document.createElement("p");
  const heightInch = document.createElement("p");
  const positionP = document.createElement("p");

  dataDiv.append(
    pointsP,
    assistsP,
    reboundsP,
    blocksP,
    heightFeet,
    heightInch,
    positionP
  );
  dataDiv.className = "data-div";
  newCard.append(dataDiv);

  positionP.innerHTML = `Position: <span class='data'>${position}</span>`;

  heightFeet.innerHTML = `Height Feet: <span class='data'>${heightF}</span>`;

  heightInch.innerHTML = `Height Inches: <span class='data'>${heightI}</span>`;

  pointsP.innerHTML = `Points Per Game: <span class='data'>${points}</span>`;

  assistsP.innerHTML = `Assists Per Game: <span class='data>${assists}</span>`;

  reboundsP.innerHTML = `Rebounds Per Game: <span class='data'>${rebounds}</span>`;

  blocksP.innerHTML = `Blocks Per Game: <span class='data'>${blocks}</span>`;
}
//Fetch requests
// getPlayerId();
// function getPlayerId() {
//   let search = document.querySelector("input#player");
//   fetch(`https://www.balldontlie.io/api/v1/players?search=${search.value}`)
//     .then((res) => res.json())
//     .then((stat) => {
//       const card = document.getElementById("card");
//       const name = document.createElement("h3");
//       const heightFeet = document.createElement("p");
//       const heightInc = document.createElement("p");
//       const position = document.createElement("p");
//       const team = document.createElement("p");
//console.log(stat);
//       name.textContent = stat.data[0].first_name + " " + stat.data[0].last_name;
//       heightFeet.textContent = `Height Feet: ${stat.data[0].height_feet}`;
//       heightInc.textContent = `Height Inches: ${stat.data[0].height_inches}`;
//       position.textContent = `Position: ${stat.data[0].position}`;
//       team.textContent = `Team: ${stat.data[0].team.full_name}`;
//       card.append(name);
//       card.append(heightFeet);
//       card.append(heightInc);
//       card.append(position);
//       card.append(team);
//     });
// }
// getPlayerStats();
// function getPlayerStats(playerId = 237) {
//   fetch(
//     `https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=${playerId}`
//   )
//     .then((res) => res.json())
//     .then((stats) => {
//       const card = document.getElementById("card");
//       const pts = document.createElement("p");
//       const ast = document.createElement("p");
//       const reb = document.createElement("p");
//       const blk = document.createElement("p");
//console.log(stats.data[0]);
//       pts.textContent = `Points per game: ${stats.data[0].pts}`;
//       ast.textContent = `Assists per game: ${stats.data[0].ast}`;
//       reb.textContent = `Rebounds per game: ${stats.data[0].reb}`;
//       blk.textContent = `Blocks per game: ${stats.data[0].blk}`;
//       card.append(pts);
//       card.append(ast);
//       card.append(reb);
//       card.append(blk);
//     });
// }

// newCard();
// function newCard() {
//   const newCard = document.createElement("div");
//   newCard.id = "card";
//   container.append(newCard);
//   document.body.append(container);
// }

// function updatePlayer(d) {
//   const player = d.data.slice(-1)["0"]["first_name"];
//   return updatePlayer;
// }
