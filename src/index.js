const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let newString = '';

    for (let i = 0; i < expr.length; i += 10) {
        const letterBinary = expr.slice(i, i + 10);
        let letterMorse = '';

        if (letterBinary === '*'.repeat(10)) {
            newString += ' ';
            continue;
        }

        for (let j = 0; j < letterBinary.length; j += 2) {
            const dashDot = letterBinary.slice(j, j + 2);
            if (dashDot === '00') {
                continue;
            }

            letterMorse += dashDot === '10' ? '.' : '-';
        }

        newString += MORSE_TABLE[letterMorse];
    }
    // console.log('newString =', newString)
    return newString;
}

module.exports = {
    decode
}