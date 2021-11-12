const X = '<div class="game-symbol noselect">X</div>'
const O = '<div class="game-symbol noselect">O</div>'
let hits = 0;

function nextElement() {
    if (hits % 2) {
        return O;
    }
    return X;
}

function markField(field) {
    field.innerHTML = nextElement()
    hits++;
    checkIfWon()
}

function getChar(elements, index) {
    return elements[index].children[0].innerHTML
}

function checkIfWon() {
    const elements = document.getElementsByClassName("col");
    for (let i = 0; i < 3; i++) {
        if (getChar(elements, 3 * i) === getChar(elements, 3 * i + 1) &&
            getChar(elements, 3 * i + 1) === getChar(elements, 3 * i + 2)) {
            return alert(getChar(elements, 3 * i) + " wygrał w linii " + i);
        }
        if (getChar(elements, i) === getChar(elements, i + 3) &&
            getChar(elements, i + 3) === getChar(elements, i + 6)) {
            return alert(getChar(elements, i) + " wygrał w kolumnie " + i);
        }

        if((getChar(elements, 0) === getChar(elements, 4) && getChar(elements, 4) === getChar(elements, 8)) ||
            getChar(elements, 2) === getChar(elements, 4) && getChar(elements, 4) === getChar(elements, 6)) {
            return alert(getChar(elements, 4) + " wygrał na skos");
        }

    }
}
