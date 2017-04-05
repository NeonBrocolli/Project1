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
    if (currentBet <= 0)
      alert('must make a bet!');
    if (currentBet > 0) {

      console.log('clicked');
    }
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


// function randomNumberGenerator() {
//   return Math.floor((Math.random() * 9) + 1);
// }

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

/* win logic stuff */

function getRandomValue() { //creates randomly generated charac
  var possibleVals = ['a', 'b', 'c', 'd', 'e']
  shuffleArr(possibleVals)
  console.log('possibleVals', possibleVals)
  var randomIndex = Math.floor((Math.random() * possibleVals.length));
  console.log('randomIndex',randomIndex)
  return possibleVals[randomIndex]
}

function shuffleArr(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}


function populateCellsRandomValues(){
  cells.forEach(function(elem, index){
    cells[index] = getRandomValue()//randomNumberGenerator()
  })
  return cells;
}
console.log(populateCellsRandomValues())

// function replaceNumbersWithSymbols(cells){
//    if (cells === 1 || cells === 4 || cells === 7) {
//      return "&spades;";}
//    else if (cells === 2 || cells === 5 || cells === 8) {
//      return "&hearts;";}
//    else if (cells === 3 || cells === 6 || cells === 9) {
//      return "&diams;";}
//   }


function render(wheelValues) {

  var wheelDictionary = {
    0: '#zero',
    1: '#one',
    2: '#two'
  }

  //justins atempt//

  // var symbol = []
  // for(var i =0; i<cells.length;i++){
  //   symbol.push(replaceNumbersWithSymbols(cells[i]

  // }

  wheelValues.forEach(function(elem, index) {
    document.querySelector(wheelDictionary[index]).innerHTML = elem;
  })
}


render(cells);

init();
