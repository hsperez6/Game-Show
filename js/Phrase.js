/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Display phrase on gameboard
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
    }

    /**
     * Checks if passed letter is in phrase
     * @param (string) letter = letter to check
     */
    checkLetter() {
        const string = game.activePhrase.phrase;
        if(string.includes(clickedLetter)) {
            this.showMatchedLetter();
        } else {
            game.removeLife();
        }

    }

    showMatchedLetter() {

    }

}