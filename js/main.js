// variables //
var cells, currentBet, currentCredits, score, message;
var images = [
  'http://i.imgur.com/YdRMttx.png',
  'http://i.imgur.com/n04yKgC.png',
  'http://i.imgur.com/VSWfCbk.png',
];

var slotsPlayer = new Audio('http://www.freesound.org/data/previews/118/118237_1430216-lq.mp3');
slotsPlayer.loop = true;

// event listener //
document.getElementById('board').addEventListener('click', init);
document.querySelector('.bet').addEventListener('click', betClick);
document.getElementById('lever').addEventListener('click', handleSpin);
document.getElementById('spin').addEventListener('click', handleSpin);

//cached dom elements
var reelEls = [
  document.getElementById('reel-0'),
  document.getElementById('reel-1'),
  document.getElementById('reel-2')
];
var creditEl = document.querySelector('.credit');
var betEl = document.querySelector('.bets');
var messageEl = document.querySelector('.score');

// initialize //
function init(){
  cells = [];
  currentBet = 0;
  currentCredits = 100;
  message = '';
  score = 0;
  render();
}

// functions //
  //Adds 5/10/Allin points to bets, subtracts from credits//
function betClick(e) {
  if (e.target.textContent === 'spin!') return;
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
function handleSpin(){ //activates spin buttons
  if (currentBet <= 0) {
    message = 'Make a Bet!';
    render();
    return;
  }
  //$('leverimg').hide()
  //$('leverimg').
  score = 0;
  cells = getResult();
  score = computeWinnings();
  slotsPlayer.play();
  flashRandomImages(function() {
    slotsPlayer.pause();
    render();
  });
   if (score >= 200) message =  "Chicken Dinner!";
   // showWinImage(function(){
   //  render();
   // });
}

function flashRandomImages(cb) {
  // flash random images for certain amount of time & play fun sound
  var reel = 0;
  var numFlashes = 100;
  var accumTime = 0;
  for (let i = 0; i <= numFlashes; i++) {
    var rndTime = Math.floor(Math.random() * 50) + 50;
    setTimeout(function() {
      var image = images[Math.floor(Math.random() * images.length)];
      reelEls[reel].style.backgroundImage = `url(${image})`;
      reel++;
      if (reel > 2) reel = 0;
      if (i >= numFlashes) cb();
    }, accumTime + rndTime);
    accumTime += rndTime;
  }
  // setInterval here to flash / total time should be no longer than duration
}


// will show a gif if player wins
function showWinImage() {
  console.log('bloop!');

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

  if (cells[0] === cells[1] && cells[1] === cells[2]) { // all 3 are same
    currentCredits = (currentBet * 10) + currentCredits;
    message = "Jack Pot!";
  } else if (cells[0] === cells[1] && cells[1] !== cells[2]) { // 2 are same
    currentCredits = currentBet + currentCredits;
    message = "Try Again!";
  } else if (cells[0] !== cells[1] && cells[1] === cells[2]) { // 2 are same
    currentCredits = currentBet + currentCredits;
    message = "Try Again!";
  }
  winnings += currentCredits;
  currentBet = 0;
  return winnings;
}

function render() {
  // render wheels
  cells.forEach(function(symbolIdx, index) {
    reelEls[index].style.backgroundImage = `url(${images[symbolIdx]})`;
  });
  creditEl.textContent = currentCredits;
  betEl.textContent = currentBet;
  messageEl.textContent = message;
}

init();
