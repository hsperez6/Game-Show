/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



let game;

/**
 * Sets the overlay background to Mario theme
 */
const start = document.querySelector('.start');
start.style.backgroundImage = "url('images/start.png')";
document.querySelector('.title').style.color = '#e75e10';


/**
 * Starts game and sets game background to Mario theme
 */
const startBtn = document.querySelector('#btn__reset');
startBtn.addEventListener('click', (e) => {
    game = new Game();
    game.startGame();
    const body = document.querySelector('body');
    body.style.backgroundImage = "url('images/mario2.png')";
    console.log(game.activePhrase.phrase)
});

const keyboard = document.querySelector('#qwerty');
let clickedLetter;

/**
 * Handles online keyboard mouse clicks
 */
keyboard.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        clickedLetter = e.target;
        game.handleInteraction(clickedLetter);
    }
})
/**
 * Handles keyboard use
 */
document.addEventListener('keydown', (e) => { 
    const allKeys = document.querySelectorAll('.key');
    for(let i=0; i<allKeys.length; i++ ) {
        if (allKeys[i].textContent === e.key) {
            clickedLetter = allKeys[i];
        }
    }
    game.handleInteraction(clickedLetter);
});