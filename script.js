const element = (() => {
  const modeOption = document.querySelector('.mode_options-wrapper');
  const signWrapper = document.querySelector('.sign-wrapper');
  const gameBoardWrapper = document.querySelector('.game_board-wrapper');
  const xBtn = document.querySelector('.x_option-btn');
  const oBtn = document.querySelector('.o_option-btn');
  const pvpBtn = document.querySelector('.pvp-btn');
  const botBtn = document.querySelector('.bot-btn');
  const result = document.querySelector('.show-result');
  const startBtn = document.querySelector('.start-btn');
  const restartBtn = document.querySelector('.restart-btn');
  const block = document.querySelectorAll('.block');

  return {
    modeOption,
    signWrapper,
    gameBoardWrapper,
    xBtn,
    oBtn,
    pvpBtn,
    botBtn,
    result,
    startBtn,
    restartBtn,
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
  let round = 1;
  let winner;
  const gameOver = false;
  let winConditions;
  let pTurn;

  const gameBoard = ['', '', '', '', '', '', '', '', ''];

  const start = Btn(element.startBtn);

  const endGame = () => {
    element.restartBtn.style.display = 'inline-block';
  };

  const drawCheck = () => {
    if (round === 10) {
      element.result.textContent = "It's Draw";
      endGame();
    }
  };

  const createBlocks = () => {
    for (let i = 0; i < gameBoard.length; i++) {
      const block = document.createElement('button');
      block.setAttribute('class', 'block');
      block.dataset.block = i;
      element.gameBoardWrapper.appendChild(block);
      block.innerText = gameBoard[i];
      block.addEventListener('click', () => {
        pTurn = pTurn === 'X' ? 'O' : 'X';
        gameBoard[block.dataset.block] = pTurn;
        block.disabled = true;
        round++;
        block.innerText = gameBoard[i];
        drawCheck();
        console.log(round);
      });
    }
  };

  // const blockClick = () => {
  //   element.block.addEventListener('click', () => {
  //     pTurn = pTurn === 'X' ? 'O' : 'X';
  //   });
  // };

  const render = () => {
    createBlocks();
  };

  element.startBtn.addEventListener('click', () => {
    render();
    start.startActivation();
  });

  element.restartBtn.addEventListener('click', () => {
    round = 1;
    pTurn = '';
    element.gameBoardWrapper.replaceChildren();
    for (let i = 0; i < gameBoard.length; i++) {
      gameBoard[i] = '';
    }
    element.result.textContent = '';
    element.restartBtn.style.display = 'none';
    render();
  });

  return {};
})();
