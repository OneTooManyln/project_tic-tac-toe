const gameBoard = (() => {
  const board = ["X", "X", "O", "O", "X", "O", "O", "O", "X"];

  /*   for (i = 0; i < 3; i++) {
    board.push("");
  } */

  const gridContainer = document.querySelector(".grid-container");
  board.forEach((item, index) => {
    const grids = document.createElement("div");
    grids.classList.add("grids");
    grids.innerText = `${item}`;
    console.log(`${item} ${index}`);
    gridContainer.appendChild(grids);
  });
  console.table(board);
  return board;
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
      console.log("Marker is O");
    } else {
      markerPicked = "X";
      console.log("Marker is X");
    }
  }

  const markerBtn = document.querySelectorAll(".btn");
  markerBtn.forEach((markerBtn) => {
    markerBtn.addEventListener("click", (e) => {
      getMarker(e.currentTarget.innerText);
    });
  });
})();
