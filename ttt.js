const gameBoard = (() => {
  const board = [];

  for (i = 0; i < 3; i++) {
    board.push("");
  }

  const gridContainer = document.querySelector(".grid-container");
  board.forEach(() => {
    const grids = document.createElement("div");
    grids.classList.add("grids");
    gridContainer.appendChild(grids);
  });
  return board;
})();

const playGame = (() => {
  const createPlayer = (name, marker) => ({ name, marker });

  const playerOne = createPlayer("player 1", "o");
  console.log(playerOne.name);

  const playerTwo = createPlayer("player 2", "x");
  console.log(playerTwo.name);
})();
