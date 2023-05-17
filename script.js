const Element = (() => {
  const modeOption = document.querySelector('.mode_options-wrapper');
  const gameBoardWrapper = document.querySelector('.game_board-wrapper');
  const xBtn = document.querySelector('.x_option-btn');
  const oBtn = document.querySelector('.o_option-btn');
  const pvpBtn = document.querySelector('.pvp-btn');
  const botBtn = document.querySelector('.bot-btn');
  const startBtn = document.querySelector('.start-btn');

  return { gameBoardWrapper, xBtn, oBtn, pvpBtn, botBtn, startBtn };
})();

const Player = (s) => {
  const playerSign = s;
  return { playerSign };
};

const Btn = (btn1, btn2) => {
  const modeActivation = () => {
    btn1.addEventListener('click', () => {
      mode = btn1.innerText;
      btn1.style.opacity = '75%';
      btn2.style.opacity = '100%';
      console.log(mode);
    });
  };
  const signActivation = () => {
    btn1.addEventListener('click', () => {
      sign = btn1.innerText;
      btn1.style.opacity = '75%';
      btn2.style.opacity = '100%';
      console.log(sign);
    });
  };
  const startActivation = () => {
    btn1.addEventListener('click', () => {
      console.log('fool');
      Element.gameBoardWrapper.style.display = 'flex';
      Element.startBtn.style.display = 'none';
    });
  };

  return { modeActivation, signActivation, startActivation };
};

const board = (() => {
  const gameBoard = ['', '', '', '', '', '', '', '', ''];
  let sign;
  let mode;

  const pvp = Btn(Element.pvpBtn, Element.botBtn);
  const bot = Btn(Element.botBtn, Element.pvpBtn);
  const x = Btn(Element.xBtn, Element.oBtn);
  const o = Btn(Element.oBtn, Element.xBtn);
  const start = Btn(Element.startBtn);

  pvp.modeActivation();
  bot.modeActivation();
  x.signActivation();
  o.signActivation();
  start.startActivation();

  const controllerChoice = () => {};

  const createBlocks = () => {
    const block = document.createElement('div');
    block.setAttribute('class', 'block');
    Element.gameBoardWrapper.appendChild(block);
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
