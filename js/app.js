/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

/**
 * Sets the overlay background to Mario theme
 */
const start = document.querySelector('.start');
start.style.backgroundImage = "url('images/start.png')";
const title = document.querySelector('.title');
title.style.color = '#e75e10';
title.style.textShadow = '4px 4px black';


/**
 * Starts game and sets game background to Mario theme
 */
const startBtn = document.querySelector('#btn__reset');
startBtn.addEventListener('click', (e) => {
    game = new Game();
    game.startGame();
    const body = document.querySelector('body');
    body.style.backgroundImage = "url('images/mario.png')";
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

/**
 * Adds Mario dies gif to game over overlay but only displays if player lost
 */
const overgif = document.createElement('img');
overgif.src = "images/gameover.gif";
overgif.style.height = '200px';
overgif.style.width = '200px';
startBtn.after(overgif);
overgif.style.visibility = 'hidden';
