/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [new Phrase('Say goodnight to the bad guy'), 
                        new Phrase('With great power comes great responsibility'), 
                        new Phrase('Here is looking at you kid'), 
                        new Phrase('Dont think just do'), 
                        new Phrase('Be like water my friends')];
        this.activePhrase = this.getRandomPhrase();
    }

    /**
     * Selects random phrase from phrases property
     * @returns {Object} phrase object chosen to be used
     */
    getRandomPhrase() {
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomIndex];
    }

    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * checks to see if the player has revealed all of the letters in the active phrase
     */
    checkForWin() {
        const hiddenLetters = document.querySelectorAll('.hide');
        if (hiddenLetters.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Removes one life from the game, adds one missed, and checks for gameOver
     */
    removeLife() {
        const hearts = document.querySelectorAll('img[src="images/liveHeart.png"]');
        hearts[0].src = "images/lostHeart.png";
        this.missed += 1;
        if (this.missed === 5) {
            this.gameOver(false);
        };
    }

    /**
     * Ends the game 
     * @param (Boolean) win or lose
     */
    gameOver(param) {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'block';
        // const hiddenLetters = document.querySelectorAll('.hide');
        const gameOverMessage = document.querySelector('#game-over-message');
        const keys = document.querySelectorAll('.key');

        if (param) {
            gameOverMessage.textContent = 'Congratulations! You Win!';
            overlay.classList.remove('start');
            overlay.classList.add('win');
            const div = document.querySelector('#phrase');
            const ul = div.firstElementChild;
            ul.innerHTML = '';
            keys.forEach(key => {
                key.className = 'key';
                key.disabled = false;
            });
            this.missed = 0;
            const losthearts = document.querySelectorAll('img[src="images/lostHeart.png"]');
            losthearts.forEach(heart => heart.src = 'images/liveHeart.png');


        } else if (!param) {
            gameOverMessage.textContent = 'Out of lives. Game Over :(';
            overlay.classList.remove('start');
            overlay.classList.add('lose');
            const div = document.querySelector('#phrase');
            const ul = div.firstElementChild;
            ul.innerHTML = '';
            keys.forEach(key => {
                key.className = 'key';
                key.disabled = false;
            });
            this.missed = 0;
            const losthearts = document.querySelectorAll('img[src="images/lostHeart.png"]');
            losthearts.forEach(heart => heart.src = 'images/liveHeart.png');
        }

    }
   
     /**
     * Handles onscreen keyboard button clicks
     * @param (HTMLButtonElement) button - The clicked button element
     */
     handleInteraction(param) {
        param.disabled = true;
        let checked = this.activePhrase.checkLetter(param);
        if (checked) {
            param.classList.add('chosen')
            this.activePhrase.showMatchedLetter(param);
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            param.classList.add('wrong')
            this.removeLife();
        }
    }



}