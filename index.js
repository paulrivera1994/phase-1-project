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
function renderCard(team, firstName, lastName, stats, conference) {
  //CREATES A NEW CARD THAT RENDERS AFTER SUBMITTING
  const newCard = document.createElement("div");
  newCard.id = "card";
  container.append(newCard);

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
