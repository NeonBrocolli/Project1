
// variables //
var cells, currentBet, currentCredits, score;
var images = [
  'http://i.imgur.com/YdRMttx.png',
  'http://i.imgur.com/n04yKgC.png',
  'http://i.imgur.com/VSWfCbk.png',
];

// event listener //

document.getElementById('board').addEventListener('click', init);
document.querySelector('.bet').addEventListener('click', betClick);
document.getElementById('lever').addEventListener('click', handleSpin);
document.getElementById('spin').addEventListener('click', handleSpin);

// initialize //
function init(){
  cells = [];
  currentBet = 0;
  currentCredits = 100;
  score = '';
  document.querySelector('.credit').textContent = currentCredits;
  document.querySelector('.bets').textContent = currentBet;
  document.querySelector('.score').textContent = score;
  render();
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
  }
  render();
}


// returns win if reels match, otherwise currentBets = 0, re-init;
  //if Spin clicked and bet = 0, cant play


function handleSpin(){ // also activates spin alongside the spin button
  if (currentBet <= 0) {
    alert('must make a bet!');
    return;
  }
  //$('leverimg').hide()
  //$('leverimg').
  score = 0;
  // fill cells with 3 random ints between 0 and images.length - 1
  cells = getResult();
  score = computeWinnings();
  //currentCredits += score;

  flashRandomImages(0, function() {
    render();
  });
}

function flashRandomImages(duration, cb) {
  // ice box: flash random images for certain amount of time & play fun sound
  setTimeout(function() {
    cb();
  }, duration);
  // setInterval here to flash / total time should be no longer than duration
}

function getResult() {
  var result = [];
  for (var i = 0; i < images.length; i++) {
    result.push(Math.floor((Math.random() * images.length)));
  }
  return result;
}

function computeWinnings() {
  // return amount of winnings or 0 if they didn't win
  var winnings = 0;

  if (cells[0] === cells[1] && cells[1] === cells[2]) {
    winnings = currentBet * 10;
    currentBet = 0;
    return 'Jack Pot!'
  } else if (cells[0] === cells[1] && cells[1] !== cells[2]) {
    winnings = currentBet;
    currentBet = 0;
  } else if (cells[0] !== cells[1] && cells[1] === cells[2]) {
    winnings = currentBet;
    currentBet = 0;
  } else {
    currentBet = 0;
  }
  if (currentCredits === 0 && currentBet === 0) {
    currentBet = 0;
    return 'Too Bad!';
  }
  return winnings;
}

function render() {
  // render wheels
  cells.forEach(function(symbolIdx, index) {
    document.getElementById(index).style.backgroundImage = `url(${images[symbolIdx]})`;

    // set all this into a css var and then edit it IN css
    document.getElementById(index).style.backgroundRepeat = `no-repeat`;
    document.getElementById(index).style.backgroundSize = `contain`;
    document.getElementById(index).style.backgroundPosition = `center center`;

  });
  document.querySelector('.credit').textContent = currentCredits;
  document.querySelector('.bets').textContent = currentBet;
  document.querySelector('.score').textContent = score;
}

init();
