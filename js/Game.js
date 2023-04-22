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




}



/*
    
    startGame() {
        //"hides the starts screen overlay"
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }



    handleInteraction() {
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

    removeLife() {
        "replace 'liveHeart.png' with 'lostHeart.png' in images folder"
        this.missed += 1

        if (this.missed === 5) {
            gameOver();
        }
    }

    checkForWin() {
        "checks to see if the player has revealed all of the letters in the active phrase"
    }

    gameOver() {
        "display original start screen overlay"
        if ("win") {
            "update overlay h1 element with friendly win message"
        } else "lost" {
            "update overlay h1 element with loss message"
        }

        "replace overlay's `start` CSS class with `win` or `lose` CSS class"
    }

}
*/