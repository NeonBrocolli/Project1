
####Start:
1. browser will show containers that will have the
   display for bets made, display for matching, and winning goal.
2. it will also a display for current credits that is set to 100
   and another that shows the current "goal."
3. There will be a set of bet buttons ranging from 5, 10, and max, as well as spin.

####Buttons:
1. Board will listen to clicks.
    - player can click within the area of the spin image.
2. when clicked:
    - if click spin without making a bet notify user game cannot start.
    - if click bet it will update and deduct from credits container. 
        - notify to click spin button.
    - if click spin with bets update display.
3. There will be three different sets of images that will show within the display for matching.
    - When spin clicked a random number will be generated that will be matched with each 
        images. 
    - If all three containers contain the same number, images will render as matched
    - If all the containers contain different numbers it will just show mismatched images.

####Winning:
1. win/lose condition, get winner if:
    a. wins if credits reach credit "goal."
    b. lose if credits less than original credit amount.
2. if player lose, all current changes stay and loops through states to try to spin over again. 
3. If player loses all credits game will alert to try next time and reset the game.
    
