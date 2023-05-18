let player1;
let player2;
let mode;

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

const Btn = (btn1, btn2) => {
  const modeActivation = () => {
    btn1.addEventListener('click', () => {
      mode = btn1.innerText;
      btn1.style.opacity = '75%';
      btn2.style.opacity = '100%';
      mode === 'Bot'
        ? (element.signWrapper.style.display = 'flex')
        : (element.signWrapper.style.display = 'none');
      console.log(mode);
    });
  };
  const signActivation = () => {
    btn1.addEventListener('click', () => {
      player1 = Player(btn1);
      player2 = Player(btn2);
      btn1.style.opacity = '75%';
      btn2.style.opacity = '100%';
      console.log(player1, player2);
    });
  };
  const startActivation = () => {
    console.log(mode);
    element.gameBoardWrapper.style.display = 'flex';
    element.startBtn.style.display = 'none';
    element.modeOption.style.display = 'none';
    element.signWrapper.style.display = 'none';
  };

  return { modeActivation, signActivation, startActivation };
};

const board = (() => {
  const gameBoard = ['', '', '', '', '', '', '', '', ''];

  const pvp = Btn(element.pvpBtn, element.botBtn);
  const bot = Btn(element.botBtn, element.pvpBtn);
  const x = Btn(element.xBtn, element.oBtn);
  const o = Btn(element.oBtn, element.xBtn);
  const start = Btn(element.startBtn);

  pvp.modeActivation();
  bot.modeActivation();
  x.signActivation();
  o.signActivation();

  element.startBtn.addEventListener('click', () => {
    if (!player1 & !mode) {
      alert('Choose Gamplay Mode');
    } else if ((mode === 'Bot') & !player1) {
      alert('Choose a sign');
    } else if (!mode) {
      alert('Choose Gamplay Mode');
    } else {
      start.startActivation();
    }
  });

  const createBlocks = () => {
    let pTurn;
    for (let i = 0; i < gameBoard.length; i++) {
      const block = document.createElement('button');
      block.setAttribute('class', 'block');
      block.setAttribute('id', `block-${i}`);
      element.gameBoardWrapper.appendChild(block);
      // make the sec click unavailable
      block.addEventListener('click', () => {
        pTurn = pTurn === 'X' ? 'O' : 'X';
        block.innerText = pTurn;
        block.disabled = true;
      });
    }
  };

  const render = () => {
    createBlocks();
  };

  render();
  return {};
})();
