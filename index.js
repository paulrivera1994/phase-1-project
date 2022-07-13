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
