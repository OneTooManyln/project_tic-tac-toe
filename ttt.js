const gameBoard = () => {
  const board = [];

  for (i = 0; i < 3; i++) {
    board.push("");
  }

  const gridContainer = document.querySelector(".grid-container");
  board.forEach((item, index) => {
    const grids = document.createElement("div");
    grids.classList.add("grids");
    gridContainer.appendChild(grids);
  });
  return board;
};
gameBoard();

const createPlayer = (name, marker) => ({ name, marker });
