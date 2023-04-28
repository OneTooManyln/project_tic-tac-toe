const gameBoard = (() => {
  const board = [];

  for (i = 0; i < 9; i++) {
    board.push("");
  }

  const gridContainer = document.querySelector(".grid-container");
  board.forEach((item) => {
    const grids = document.createElement("div");
    grids.classList.add("grids");
    /* grids.innerText = `${item}`; */
    console.log(`${item}`);
    gridContainer.appendChild(grids);
  });
  console.table(board);

  const grids = document.querySelectorAll(".grids");
  grids.forEach((grids) => {
    grids.addEventListener("click", (e) => {
      e.currentTarget.innerText = gameController.markerPicked;
    });
  });
  return { board };
})();

const playGame = (() => {})();

const gameController = (() => {
  const createPlayer = (name, marker) => ({ name, marker });

  const playerOne = createPlayer("player 1", "O");
  console.log(playerOne.name);
  const playerTwo = createPlayer("player 2", "X");
  console.log(playerTwo.name);

  let markerPicked;

  function getMarker(marker) {
    if (marker === "O") {
      markerPicked = "O";
      choosePlayer();
      console.log("Marker is O");
    } else {
      markerPicked = "X";
      choosePlayer();
      console.log("Marker is X");
    }
  }

  let currentPlayer;

  function choosePlayer() {
    if (markerPicked === "O") {
      currentPlayer = playerOne;
      console.log(currentPlayer);
    } else currentPlayer = playerTwo;
  }

  const markerBtn = document.querySelectorAll(".btn");
  markerBtn.forEach((markerBtn) => {
    markerBtn.addEventListener("click", (e) => {
      getMarker(e.currentTarget.innerText);
    });
  });

  console.log(markerPicked);

  return { getMarker, markerPicked, currentPlayer, choosePlayer };
})();

console.log(gameController.markerPicked);
