"use strict";
// count the number of words that is concatenated into camel-case
// e.g. helloWorld contains 2 words
// the given string is guaranteed to have length > 0;
function countNumOfWords(str) {
    var match = str.match(/[A-Z]/g);
    return match ? match.length + 1 : 1;
}
module.exports = countNumOfWords;
