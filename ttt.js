const gameBoard = (() => {
  const board = [];

  const renderBoard = (() => {
    for (i = 0; i < 9; i++) {
      board.push("");
    }
  })();

  const gridContainer = document.querySelector(".grid-container");
  board.forEach((item) => {
    const grids = document.createElement("div");
    grids.classList.add("grids");
    console.log(`${item}`);
    gridContainer.appendChild(grids);
  });
  console.table(board);

  const form = document.querySelector("form");
  const player1 = document.querySelector("#player_one");
  const player2 = document.querySelector("#player_two");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(player1.value, player2.value);
    form.reset();
    textInputs.forEach((textInputs) => {
      textInputs.style.display = "none";
    });
  });

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
      } else {
        gameController.currentPlayer = gameController.playerTwo;
        console.log(gameController.currentPlayer);
        oButton.disabled = true;
      }
      grids.forEach((grids, index) => {
        grids.addEventListener("click", (e) => {
          const currentGrid = e.currentTarget;
          currentGrid.innerText = gameController.currentPlayer.marker;
          currentGrid.style.pointerEvents = "none";
          board[index] = gameController.currentPlayer.marker;
          console.table(board);
          console.log(gameController.currentPlayer);
          gameController.findNextPlayer();
          gameController.declareWinner();
          gameController.declareTie();
        });
      });
    });
  });

  const aiBtn = document.getElementById("ai");
  const textInputs = document.querySelectorAll("#hide");
  const playerBtn = document.getElementById("1v1");

  aiBtn.addEventListener("click", () => {
    textInputs.forEach((textInputs) => {
      textInputs.style.display = "none";
    });
  });

  playerBtn.addEventListener("click", () => {
    textInputs.forEach((textInputs) => {
      textInputs.style.display = "flex";
    });
  });

  const clearBoard = document.querySelector(".clear-grid");
  clearBoard.addEventListener("click", () => {
    location.reload();
  });

  return { board, renderBoard };
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

  let gameWinner;

  function declareWinner() {
    winningGrids.forEach((item) => {
      if (
        gameBoard.board[item[0]] === this.playerOne.marker &&
        gameBoard.board[item[1]] === this.playerOne.marker &&
        gameBoard.board[item[2]] === this.playerOne.marker
      ) {
        this.gameWinner = playerOne;
        console.log(this.gameWinner);
      } else if (
        gameBoard.board[item[0]] === this.playerTwo.marker &&
        gameBoard.board[item[1]] === this.playerTwo.marker &&
        gameBoard.board[item[2]] === this.playerTwo.marker
      ) {
        this.gameWinner = playerTwo;
        console.log(this.gameWinner);
      }
      return gameWinner;
    });
  }

  function declareTie() {
    if (
      this.gameWinner !== playerOne &&
      this.gameWinner !== playerTwo &&
      !gameBoard.board.includes("")
    ) {
      console.log("its a tie");
    }
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

  function findNextPlayer() {
    if (this.currentPlayer === playerOne) {
      this.currentPlayer = playerTwo;
      console.log(this.currentPlayer);
    } else if (this.currentPlayer === playerTwo) {
      this.currentPlayer = playerOne;
      console.log(this.currentPlayer);
    } else console.log("error");
  }

  return {
    getMarker,
    markerPicked,
    currentPlayer,
    choosePlayer,
    playerOne,
    playerTwo,
    declareWinner,
    findNextPlayer,
    gameWinner,
    declareTie,
  };
})();
