const gameBoard = (() => {
  const board = [];

  for (i = 0; i < 9; i++) {
    board.push("");
  }

  const gridContainer = document.querySelector(".grid-container");
  board.forEach((item) => {
    const grids = document.createElement("div");
    grids.classList.add("grids");
    console.log(`${item}`);
    gridContainer.appendChild(grids);
  });
  console.table(board);

  const markerBtn = document.querySelectorAll(".btn");
  const grids = document.querySelectorAll(".grids");
  markerBtn.forEach((markerBtn) => {
    markerBtn.addEventListener("click", (e) => {
      gameController.getMarker(e.currentTarget.innerText);

      if (e.currentTarget.innerText === "O") {
        grids.forEach((grids, index) => {
          grids.addEventListener("click", (e) => {
            const currentGrid = e.currentTarget;
            currentGrid.innerText = gameController.playerOne.marker;
            currentGrid.style.pointerEvents = "none";
            board[index] = gameController.playerOne.marker;
            console.table(board);
          });
        });
      } else {
        grids.forEach((grids, index) => {
          grids.addEventListener("click", (e) => {
            const currentGrid = e.currentTarget;
            currentGrid.innerText = gameController.playerTwo.marker;
            currentGrid.style.pointerEvents = "none";
            board[index] = gameController.playerTwo.marker;
            console.table(board);
          });
        });
      }
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
      this.currentPlayer = playerOne;
      console.log(currentPlayer);
    } else this.currentPlayer = playerTwo;
  }

  return {
    getMarker,
    markerPicked,
    currentPlayer,
    choosePlayer,
    playerOne,
    playerTwo,
  };
})();
