const Player = (sign) => {
  const playerSign = sign;
  return { playerSign };
};
const Gameboard = (() => {
  const gameBoard = ['', '', '', '', '', '', '', '', ''];

  const createBlocks = () => {
    const container = document.querySelector('.container');
    const block = document.createElement('div');
    block.setAttribute('class', 'block');
    container.appendChild(block);
  };

  const render = () => {
    gameBoard.forEach(createBlocks);
  };

  render();
  return {};
})();

// const container = document.querySelector('')
/// ////////////////////////////////////////////////////////
// const Gameboard = (() => {
//   const gameBoard = ['', '', '', '', '', '', '', '', ''];

//   const render = (playerSign) => {
//     for (let i = 0; i < gameBoard.length; i++) {
//       document.createElement('div');
//       document.setAttribute('class', 'squares');
//       document.setAttribute('id', `square-${i}`);
//       squares.textContent = `${playerSign}`;
//       document.appendChild(squares);
//     }
//   };
//   gameBoard.forEach((playerSign) => {});

//   return {};
// })();
