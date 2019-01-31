// reverse a list in place

function reverseList(arr: number[]): number[] {
    const length: number = Math.ceil(arr.length / 2);
    let temp: number;

    for (let i = 0; i < length; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }

    return arr;
}

module.exports = reverseList;
