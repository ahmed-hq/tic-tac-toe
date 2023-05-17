const Player = (s) => {
  const playerSign = s;
  return { playerSign };
};

// const Btn = () => {
//   const xBtn = document.querySelector('.x_option-btn');
//   const oBtn = document.querySelector('.o_option-btn');
//   const pvpBtn = document.querySelector('.pvp-btn');

//   const xActive = () => {
//     console.log('jjjj');
//   };

//   return { xActive };
// };

const Gameboard = (() => {
  const gameBoard = ['', '', '', '', '', '', '', '', ''];
  let sign;
  let mode;

  const xBtn = document.querySelector('.x_option-btn');
  const oBtn = document.querySelector('.o_option-btn');
  const pvpBtn = document.querySelector('.pvp-btn');
  const botBtn = document.querySelector('.bot-btn');

  const btn = (btn1, btn2, type) => {
    btn1.addEventListener('click', () => {
      type = btn1.innerText;
      btn1.style.opacity = '75%';
      btn2.style.opacity = '100%';
      console.log(type);
    });
  };

  btn(pvpBtn, botBtn, mode);
  btn(botBtn, pvpBtn, mode);
  btn(xBtn, oBtn, sign);
  btn(oBtn, xBtn, sign);

  const controllerChoice = () => {};

  const createBlocks = () => {
    const gameBoardWrapper = document.querySelector('.game_board-wrapper');
    const block = document.createElement('div');
    block.setAttribute('class', 'block');
    gameBoardWrapper.appendChild(block);
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
