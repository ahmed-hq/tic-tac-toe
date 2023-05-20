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

const Btn = () => {
  const startActivation = () => {
    element.gameBoardWrapper.style.display = 'flex';
    element.startBtn.style.display = 'none';
  };
  return { startActivation };
};

const board = (() => {
  const gameBoard = ['', '', '', '', '', '', '', '', ''];
  let round = 1;
  let pTurn;
  const start = Btn(element.startBtn);
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const endGame = () => {
    element.restartBtn.style.display = 'inline-block';
    element.block.disabled = true;
  };

  const drawCheck = () => {
    if (round === 10) {
      element.result.textContent = "It's Draw";
      element.gameBoardWrapper.style.pointerEvents = 'none';
      endGame();
    }
  };

  const winnerCheck = () => {
    for (let i = 0; i <= winConditions.length; i += 1) {
      const a = gameBoard[winConditions[i][0]];
      const b = gameBoard[winConditions[i][1]];
      const c = gameBoard[winConditions[i][2]];

      if (!a || !b || !c) {
        continue;
      }
      if (a === b && b === c) {
        element.result.textContent = `${b} Wins`;
        endGame();
        element.gameBoardWrapper.style.pointerEvents = 'none';
        break;
      } else drawCheck();
    }
  };

  const createBlocks = () => {
    for (let i = 0; i < gameBoard.length; i += 1) {
      const block = document.createElement('button');
      block.setAttribute('class', 'block');
      block.dataset.block = i;
      element.gameBoardWrapper.appendChild(block);
      block.innerText = gameBoard[i];
      block.addEventListener('click', () => {
        pTurn = pTurn === 'X' ? 'O' : 'X';
        gameBoard[block.dataset.block] = pTurn;
        block.disabled = true;
        round += 1;
        block.innerText = gameBoard[i];
        winnerCheck();
        console.log(round);
      });
    }
  };

  element.startBtn.addEventListener('click', () => {
    createBlocks();
    start.startActivation();
  });
  element.restartBtn.addEventListener('click', () => {
    round = 1;
    pTurn = '';
    element.gameBoardWrapper.replaceChildren();
    for (let i = 0; i < gameBoard.length; i += 1) {
      gameBoard[i] = '';
    }
    element.result.textContent = '';
    element.restartBtn.style.display = 'none';
    element.gameBoardWrapper.style.pointerEvents = 'all';
    createBlocks();
  });

  return {};
})();
