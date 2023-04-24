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
            alert('YOU WIN!');
        }
    }

    /**
     * 
     */
    removeLife() {
        const hearts = document.querySelectorAll('img[src="images/liveHeart.png"]');
        hearts[0].src = "images/lostHeart.png"
        this.missed += 1
    }


    /**
     * 
     */
    gameOver() {
        "display original start screen overlay"
        if ("win") {
            "update overlay h1 element with friendly win message"
        } else "lost" {
            "update overlay h1 element with loss message"
        }

        "replace overlay's `start` CSS class with `win` or `lose` CSS class"
    }
    // if (this.missed === 5) {
        //     gameOver();
        // }



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