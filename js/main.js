console.log('its ALIVE!');
// variables //
var cells, currentBet, currentCredits, score, winner, gameOverMsg;


// event listener //

document.getElementById('board').addEventListener('click', init);
document.querySelector('.bet').addEventListener('click', betClick);
document.querySelector('#spin').addEventListener('click', spinWin);
// initialize //
  //display containers with values
function init(){
  cells = [0,0,0];
  currentBet = 0;
  currentCredits = 100;
  score = '';
  winner = 1000;
  gameOverMsg = '';
  document.querySelector('.credit').textContent = currentCredits;
  document.querySelector('.bets').textContent = currentBet;
  document.querySelector('.score').textContent = score;

  render();
}

// functions //
  //very very dry will clean up//
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
      //console.log('must make a bet!');
    }
    //console.log('works', e.target.id);
  }
  document.querySelector('.credit').textContent = currentCredits;
  document.querySelector('.bets').textContent = currentBet;
}

// returns win if reels match, otherwise currentBets = 0, re-init;
  //if Spin clicked and bet = 0, cant play

function spinWin(){
//   if (cells[0] && cells[0] === cells[1] && cells[0] === cells[2]) {
//     return cells[0];
// }


function map(array, cb) {
  var rng = Math.floor((Math.random() * 9) + 1);
  var newArray = [];
  for (var i = 0; i < cells.length; i++) {
    newArray.push(cb(cells[i]));
  }
  return newArray;
}
function addOne(x) {
  return rng;
}
    // if (rng === 1 || rng === 4 || rng === 7) {
    //   elem = "&spades;";}
    // if (rng === 2 || rng === 5 || rng === 8) {
    //   elem = "&hearts;";}
    // if (rng === 3 || rng === 6 || rng === 9) {
    //   elem = "&diams;";}
}

function render() {
}

init();
