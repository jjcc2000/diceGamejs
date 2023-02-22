'use strict';
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const imgDice = document.querySelector('.dice');
const scorePlayer1 = document.querySelector('#name--1');
const scorePlayer0 = document.querySelector('#name--0');
const current1 = document.querySelector('#current--1');
const current0 = document.querySelector('#current--0');
const ttlHSre1 = document.querySelector('#score--1');
const ttlHSre0 = document.querySelector('#score--0');
let currentPlayer = 0;
let currentScore = 0;

//Function to Roll Dice//
const FunforDice = function () {
  let rdnNumber = Math.floor(Math.random() * 6) + 1;
  currentScore += rdnNumber;
  imgDice.setAttribute('src', `dice-${rdnNumber}.png`);
  if (currentPlayer == 0) current0.textContent = currentScore.toString();
  if (currentPlayer == 1) current1.textContent = currentScore.toString();
  if (rdnNumber == 1) PlayerSwticher();
};
/////////////////////////////////////////////////////////FUNCTION TO HOLD////////////////////////////////////////////////////////

function toHold() {
  if (currentPlayer == 0) {
    let toAdd = parseInt(current0.textContent);
    let hs0 = parseInt(ttlHSre0.textContent);
    hs0 += toAdd;
    alert(hs0);
    ttlHSre0.textContent = hs0;
    if (parseInt(ttlHSre0.textContent) >= 20) {
      alert(`Player 1 has wom the game`);
    } else {
      PlayerSwticher();
    }
    toAdd = 0;
    hs0 = 0;
  } else if (currentPlayer == 1) {
    let toAdd1 = parseInt(current1.textContent);
    let hs1 = parseInt(ttlHSre1.textContent);
    hs1 += toAdd1;
    alert(hs1);
    ttlHSre1.textContent = hs1;
    if (parseInt(ttlHSre1.textContent) >= 20) {
      alert('Player 2 has wom the game');
    } else {
      PlayerSwticher();
    }
    toAdd1 = 0;
    hs1 = 0;
  }
}
//TODO:Player Switcher//
function PlayerSwticher() {
  alert('Is the next player turn');
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  currentScore = 0;
}

btnRollDice.addEventListener('click', function () {
  FunforDice();
});

btnHold.addEventListener('click', function () {
  toHold();
});
