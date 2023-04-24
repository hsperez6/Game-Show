/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



let game;

const startBtn = document.querySelector('#btn__reset');

startBtn.addEventListener('click', (e) => {
    game = new Game();
    game.startGame();
    console.log(game.activePhrase);

});

const keyboard = document.querySelector('#qwerty');

let clickedLetter;

keyboard.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        clickedLetter = e.target.textContent;
    }

    game.activePhrase.checkLetter();


})

// const randomPhrase =game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();

















//console.log(game.getRandomPhrase().addPhraseToDisplay());



















//const resetBtn = document.getElementById("btn__reset");


/*
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
*/