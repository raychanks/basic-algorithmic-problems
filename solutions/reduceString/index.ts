// reduce a string, if two adjacent characters are the same, eliminate them
// repeat this process until there are no adjacent characters that is the same
// e.g. 'abccbb' -> 'abbb' -> 'ab'

function reduceString(str: string): string {
    let reducedStr: string = str;
    let tempStr: string = '';
    let shouldRepeat: boolean = true;
    let current: number = 0;

    while (shouldRepeat) {
        current = 0;
        shouldRepeat = false;
        tempStr = '';

        while (current < reducedStr.length) {
            if (reducedStr[current] !== reducedStr[current + 1]) {
                tempStr += reducedStr[current];
                current++;
            } else {
                current += 2;
                shouldRepeat = true;
            }
        }

        reducedStr = tempStr;
    }

    return reducedStr;
}

module.exports = reduceString;
