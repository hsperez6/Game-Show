/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }


    /**
     * Displays phrase on gameboard
     */
    addPhraseToDisplay() {
        const div = document.querySelector('#phrase');
        const ul = div.firstElementChild;

        const string = game.activePhrase.phrase;
        const array = string.split('');
        for(let i=0; i<array.length ; i++) {
            if (array[i] !== ' ') {
                ul.insertAdjacentHTML(
                    'beforeend',
                    `<li class="hide letter ${array[i]}">${array[i]}</li>`  
                    );
            } else {
                ul.insertAdjacentHTML(
                    'beforeend',
                    `<li class="space">${array[i]}</li>`  
                    );
            }
        }

        /**
         * Replaces blank box with Mario question block
         */
        const hiddenLetters = document.querySelectorAll('.hide');
        for(let i=0; i<hiddenLetters.length; i++) {
            hiddenLetters[i].style.backgroundImage = "url('images/marioblock2.png')";
        }
    }


    /**
     * Checks if passed letter is in phrase
     * @param (string) letter = Letter to check
     * @returns (boolean) match or not
     */
    checkLetter(param) {
        if(game.activePhrase.phrase.includes(param.textContent)) {
            return true;
        } else {
            return false;
        }
    }


    /**
     * Displays passed letter on screen after a match is found
     * @param (string) letter - Letter to display 
     */
    showMatchedLetter(param) {
        const letterArray = document.querySelectorAll('.hide');
        letterArray.forEach(letter => {
            if (letter.textContent === param.textContent) {
                letter.classList.remove('hide');
                letter.classList.add('show');
                letter.style.backgroundImage = '';
            }
        })
    }
    
}