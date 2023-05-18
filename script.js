const element = (() => {
  const modeOption = document.querySelector('.mode_options-wrapper');
  const signWrapper = document.querySelector('.sign-wrapper');
  const gameBoardWrapper = document.querySelector('.game_board-wrapper');
  const xBtn = document.querySelector('.x_option-btn');
  const oBtn = document.querySelector('.o_option-btn');
  const pvpBtn = document.querySelector('.pvp-btn');
  const botBtn = document.querySelector('.bot-btn');
  const startBtn = document.querySelector('.start-btn');
  const block = document.querySelectorAll('.block');

  return {
    modeOption,
    signWrapper,
    gameBoardWrapper,
    xBtn,
    oBtn,
    pvpBtn,
    botBtn,
    startBtn,
    block,
  };
})();

const Player = (btn) => {
  const sign = btn.innerText;
  return { sign };
};

const Btn = () => {
  const startActivation = () => {
    element.gameBoardWrapper.style.display = 'flex';
    element.startBtn.style.display = 'none';
  };
  return { startActivation };
};

const board = (() => {
  let pTurn;
  const gameBoard = ['', '', '', '', '', '', '', '', ''];

  const start = Btn(element.startBtn);

  const createBlocks = () => {
    for (let i = 0; i < gameBoard.length; i++) {
      const block = document.createElement('button');
      block.setAttribute('class', 'block');
      block.setAttribute('id', `block-${i}`);
      element.gameBoardWrapper.appendChild(block);
      block.addEventListener('click', () => {
        pTurn = pTurn === 'X' ? 'O' : 'X';
        block.innerText = pTurn;
      });
    }
  };

  const render = () => {
    createBlocks();
  };

  element.startBtn.addEventListener('click', () => {
    render();
    start.startActivation();
  });

  return {};
})();
