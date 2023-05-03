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
  const oButton = document.querySelector(".o");
  const xButton = document.querySelector(".x");
  const grids = document.querySelectorAll(".grids");
  markerBtn.forEach((markerBtn) => {
    markerBtn.addEventListener("click", (e) => {
      gameController.getMarker(e.currentTarget.innerText);

      if (e.currentTarget.innerText === "O") {
        gameController.currentPlayer = gameController.playerOne;
        console.log(gameController.currentPlayer);
        xButton.disabled = true;
        /* grids.forEach((grids, index) => {
          grids.addEventListener("click", (e) => {
            const currentGrid = e.currentTarget;
            currentGrid.innerText = gameController.playerOne.marker;
            currentGrid.style.pointerEvents = "none";
            board[index] = gameController.playerOne.marker;
            console.table(board);
            gameController.declareWinner();
          });
        }); */
      } else {
        gameController.currentPlayer = gameController.playerTwo;
        console.log(gameController.currentPlayer);
        oButton.disabled = true;
        /* grids.forEach((grids, index) => {
          grids.addEventListener("click", (e) => {
            const currentGrid = e.currentTarget;
            currentGrid.innerText = gameController.playerTwo.marker;
            currentGrid.style.pointerEvents = "none";
            board[index] = gameController.playerTwo.marker;

            console.table(board);
            gameController.declareWinner();
          });
        }); */
      }
      grids.forEach((grids, index) => {
        grids.addEventListener("click", (e) => {
          const currentGrid = e.currentTarget;
          currentGrid.innerText = gameController.currentPlayer.marker;
          currentGrid.style.pointerEvents = "none";
          board[index] = gameController.currentPlayer.marker;
          console.table(board);
          console.log(gameController.currentPlayer);
          gameController.declareWinner();
        });
      });
    });
  });

  return { board };
})();

const gameController = (() => {
  const createPlayer = (name, marker) => ({ name, marker });

  const playerOne = createPlayer("player 1", "O");
  console.log(playerOne.name);
  const playerTwo = createPlayer("player 2", "X");
  console.log(playerTwo.name);

  const winningGrids = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function declareWinner() {
    winningGrids.forEach((item) => {
      if (
        gameBoard.board[item[0]] === this.currentPlayer.marker &&
        gameBoard.board[item[1]] === this.currentPlayer.marker &&
        gameBoard.board[item[2]] === this.currentPlayer.marker
      )
        console.log(this.currentPlayer.name);
    });
  }

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
    declareWinner,
  };
})();
