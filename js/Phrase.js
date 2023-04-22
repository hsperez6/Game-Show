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
        // const div = document.createElement('div');
        // div.id = 'phrase';
        // div.className = 'section';
        // const ul = document.createElement('ul')
        // div.appendChild(ul);

        const div = document.querySelector('#phrase');
        const ul = div.firstChild;

        const string = game.activePhrase;
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
     *  list.insertAdjacentHTML(
        'afterbegin',
        `<li>${input.value}</li>`  
        );

     *  <div id="phrase" class="section">
            <ul>
                <li class="hide letter h">h</li>
                <li class="hide letter o">o</li>
                <li class="hide letter w">w</li>
                <li class="space"> </li>
                <li class="hide letter a">a</li>
                <li class="hide letter r">r</li>
                <li class="hide letter e">e</li>
                <li class="space"> </li>
                <li class="hide letter y">y</li>
                <li class="hide letter o">o</li>
                <li class="hide letter u">u</li>
            </ul>
        </div>
     */








    checkLetter() {

    }

    showMatchedLetter() {

    }

}