"use strict";
// reverse a list in place
function reverseList(arr) {
    var length = Math.ceil(arr.length / 2);
    var temp;
    for (var i = 0; i < length; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
module.exports = reverseList;
