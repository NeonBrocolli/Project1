console.log('its ALIVE!');
// variables //
var cells, currentBet, currentCredits, score, winner, gameOverMsg;

cells = [1,2,3];


// event listener //

document.getElementById('board').addEventListener('click', init);
document.querySelector('.bet').addEventListener('click', betClick);
document.getElementById('lever').addEventListener('click', handleClick);

// initialize //
  //display containers with values
function init(){
  currentBet = 0;
  currentCredits = 100;
  score = currentCredits;
  winner = 1000;
  gameOverMsg = '';
  document.querySelector('.credit').textContent = currentCredits;
  document.querySelector('.bets').textContent = currentBet;
  document.querySelector('.score').textContent = score;

}

// functions //
  //Adds 5/10/Allin points to bets, subtracts from credits//

function betClick(e) {
  var number = {"five": 5, "ten": 10};
  var allIn = currentCredits;

  if (e.target.id === 'five') {
    if (currentCredits <= 0) return;
      currentBet += number.five;
      currentCredits -= number.five;
  } else if (e.target.id === 'ten') {
    if (currentCredits < 10) return;
      currentBet += number.ten;
      currentCredits -= number.ten;
  } else if (e.target.id === 'all') {
      currentBet += allIn;
      currentCredits -= allIn;
  } else if (e.target.id === 'spin') {
    if (currentBet <= 0) {
      alert('must make a bet!');
    }
    console.log('clicked');
  }
  document.querySelector('.credit').textContent = currentCredits;
  document.querySelector('.bets').textContent = currentBet;
}

// returns win if reels match, otherwise currentBets = 0, re-init;
  //if Spin clicked and bet = 0, cant play

function didPlayerLose() {
  if (currentCredits - currentBets <= 0){
      alert('Try Again!');
  }
}

function handleClick(){ // also activates spin alongside the spin button
    if (currentBet <= 0) {
      alert('must make a bet!');
    }
  console.log('clicked!');
}


function randomNumberGenerator() {
  return Math.floor((Math.random() * 9) + 1);
}

function hasPlayerWon() {
  if (cells[0] === cells[1] === cells[2]) {
    currentCredits += (currentBet / 5) * currentCredits;
  }

  if (currentCredits >= 100) {
    return score = currentCredits;//displays score updated if player earns more
  }

  if (currentCredits === 1000) {
    alert('CASH OUT!');//winning alert but player can keep playing
  }
  document.querySelector('.score').textContent = score;
}

// /* win logic stuff */

//  if (rng === 1 || rng === 4 || rng === 7) {
//    var randomVar = "&spades;";}
//  if (rng === 2 || rng === 5 || rng === 8) {
//    var randomVar = "&hearts;";}
//  if (rng === 3 || rng === 6 || rng === 9) {
//    var randomVar = "&diams;";}

function populateCellsWithRandomNumbers(){
  cells.forEach(function(elem, index){
    cells[index] = randomNumberGenerator()
  })
  return cells;
}
console.log(populateCellsWithRandomNumbers())
function render(wheelValues) {

  var wheelDictionary = {
    0: '#zero',
    1: '#one',
    2: '#two'
  }


  wheelValues.forEach(function(elem, index) {
    document.querySelector(wheelDictionary[index]).innerHTML = elem;
  })
}


render(cells);

init();
