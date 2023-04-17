/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

class Game {
    constructor() {

    }
}

const resetBtn = document.getElementById("btn__reset");

resetBtn.addEventListener('click', (e) => {
    new Game();
    startGame();
});

const keys = document.querySelectorAll('.key');

for(let i=0; i<keys.length; i++) {
    keys[i].addEventListener('click', (e) => {
        game.handleInteraction()
    });
}