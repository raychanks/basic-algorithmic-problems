"use strict";
// reduce a string, if two adjacent characters are the same, eliminate them
// repeat this process until there are no adjacent characters that is the same
// e.g. 'abccbb' -> 'abbb' -> 'ab'
function reduceString(str) {
    var reducedStr = str;
    var tempStr = '';
    var shouldRepeat = true;
    var current = 0;
    while (shouldRepeat) {
        current = 0;
        shouldRepeat = false;
        tempStr = '';
        while (current < reducedStr.length) {
            if (reducedStr[current] !== reducedStr[current + 1]) {
                tempStr += reducedStr[current];
                current++;
            }
            else {
                current += 2;
                shouldRepeat = true;
            }
        }
        reducedStr = tempStr;
    }
    return reducedStr;
}
module.exports = reduceString;
