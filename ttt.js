const gameBoard = (() => {
  const board = ["X", "X", "O", "O", "X", "0", "0", "0", "X"];

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

const playGame = (() => {
  const createPlayer = (name, marker) => ({ name, marker });

  const playerOne = createPlayer("player 1", "o");
  console.log(playerOne.name);

  const playerTwo = createPlayer("player 2", "x");
  console.log(playerTwo.name);
})();
