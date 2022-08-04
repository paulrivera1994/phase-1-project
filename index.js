const form = document.getElementById("search-form");
const card = document.querySelector("#card");
const container = document.querySelector(".card-container");
const player = document.getElementById("player");
const teams = document.getElementById("teams");

//EVENT LISTENERS
//LOAD CARD CONTAINER AFTER DOM LOAD
document.addEventListener("DOMContentLoaded", preLoadPlayers);
form.addEventListener("submit", handleSubmit);
function handleSubmit(e) {
  e.preventDefault();
  let newPlayerObj = {
    player: e.target.player.value,
    team: teams.options[teams.selectedIndex].text,
  };
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
  closeIcon.src = "./src/x-symbol.png";
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

  assistsP.innerHTML = `Assists Per Game: <span class='data'>${assists}</span>`;

  reboundsP.innerHTML = `Rebounds Per Game: <span class='data'>${rebounds}</span>`;

  blocksP.innerHTML = `Blocks Per Game: <span class='data'>${blocks}</span>`;
}

async function getData(players, callback) {
  const player = players.player;
  let playerData, seasonData;
  try {
    playerData = await fetch(
      `https://www.balldontlie.io/api/v1/players?search=${player}`
    )
      .then((res) => {
        const json = res.json();
        return json;
      })
      .then((d) => {
        return d.data;
      });

    const playerId = playerData[0].id;
    console.log("playerId:", playerId);
    seasonData = await fetch(
      `https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=${playerId}`
    )
      .then((res) => {
        const json = res.json();
        return json;
      })
      .then((d) => {
        return d.data[0];
      });
  } catch (error) {
    console.log(error);
  } finally {
    callback(
      players,
      playerData[0].position,
      playerData[0].height_feet,
      playerData[0].height_inches,
      seasonData.pts,
      seasonData.ast,
      seasonData.reb,
      seasonData.blk
    );
  }
}

function preLoadPlayer(player, team) {
  let preLoadedPlayer = {
    player: player,
    team: team,
  };

  //Render Card to Page
  getData(preLoadedPlayer, renderPlayerCard);
}
//Pre-loaded Players
const randomPlayers = [
  ["Lebron James", "Los Angeles Lakers"],
  ["Stephen Curry", "Golden State Warriors"],
  ["Luka Doncic", "Dallas Mavericks"],
];
function preLoadPlayers() {
  randomPlayers.forEach((player) =>
    preLoadPlayer(player[0], player[1], player[2])
  );
}
