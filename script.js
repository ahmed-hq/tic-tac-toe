const Player = (playerSign) => {
  const sign = playerSign;
  return { sign };
};
const Gameboard = (() => {
  const gameBoard = ['', '', '', '', '', '', '', '', ''];

  const render = (playerSign) => {
    for (let i = 0; i < gameBoard.length; i++) {
      document.createElement('div');
      document.setAttribute('class', 'squares');
      document.setAttribute('id', `square-${i}`);
      squares.textContent = `${playerSign}`;
      document.appendChild(squares);
    }
  };
  // for (let i = 0; i < gameBoard.length; i++) {
  //   document.createElement('div');
  //   document.setAttribute('class', 'squares');
  //   document.setAttribute('id', `square-${i}`);
  //   squares.textContent = `${playerSign}`;
  //   document.appendChild(squares);
  // }
  gameBoard.forEach((playerSign) => {});

  return {};
})();
