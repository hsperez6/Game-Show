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


    handleInteraction() {
        let checked = this.activePhrase.checkLetter(clickedLetter);
        if (checked) {
            this.activePhrase.showMatchedLetter(clickedLetter);
        } else {
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
     * 
     */
    removeLife() {
        const hearts = document.querySelectorAll('img[src="images/liveHeart.png"]');
        hearts[0].src = "images/lostHeart.png";
        this.missed += 1;
        if (this.missed === 5) {
            this.gameOver();
        };
    }


    /**
     * 
     */
    gameOver() {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'block';
        const hiddenLetters = document.querySelectorAll('.hide');
        const gameOverMessage = document.querySelector('#game-over-message')

        if (hiddenLetters.length === 0) {
            gameOverMessage.textContent = 'Congratulations! You Win!';
            overlay.classList.remove('start');
            overlay.classList.add('win');
        } else if (this.missed === 5) {
            gameOverMessage.textContent = 'Out of lives. Game Over :('
            overlay.classList.remove('start');
            overlay.classList.add('lose');
        }

    }
   
    



}




/*  handleInteraction() {
        "e.target.letter".disable = true;
        
        if("phrase does not include guessed letter") {
            // add `wrong` CSS class to the selected letter's keyboard button
            removeLife();
        } else if ("phrase does include guessed letter") {
            // add `chosen` CSS class to the selected letter's keyboard button
            this.activePhrase.showMatchedLetter();
            checkForWin();

            if ("player has won the game") {
                gameOver();
            }
        }
    }

    

    

    

}
*/