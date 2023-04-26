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
        this.activePhrase = null;
    }


    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
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
    * Handles clicked button 
    * @param (letter) button - The clicked button element
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
     * Resets the game
     */
    gameReset() {
        const keys = document.querySelectorAll('.key');
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


    /**
     * Ends the game 
     * @param (Boolean) win or lose
     */
    gameOver(param) {
        const overlay = document.querySelector('#overlay');
        overlay.setAttribute('align', 'center');
        overlay.style.display = 'block';
        const gameOverMessage = document.querySelector('#game-over-message');

        if (param) {
            gameOverMessage.textContent = 'Congratulations! You Win!';
            overlay.className = '';
            overlay.classList.add('win');
            overlay.style.backgroundImage = "url('images/win.gif')";    
            this.gameReset();
        } else if (!param) {
            gameOverMessage.textContent = 'Out of lives';
            overlay.className = '';
            overlay.classList.add('lose');
            overlay.style.backgroundImage = "url('images/gameover-background.png')";           
            const overgif = document.createElement('img');
            const linebreak = document.createElement('br');
            overgif.src = "images/gameover.gif";
            overgif.style.height = '200px';
            overgif.style.width = '200px';
            gameOverMessage.after(overgif);
            overgif.after(linebreak);
            this.gameReset();
        }
    }  

}


