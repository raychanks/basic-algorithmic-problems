const { expect } = require('chai');

const reverseList = require('./index');

describe('reverseList', () => {
    it('reverse [1, 2, 3, 4]', () => {
        expect(reverseList([1, 2, 3, 4])).to.deep.equal([4, 3, 2, 1]);
    });

    it('reverse []', () => {
        expect(reverseList([])).to.deep.equal([]);
    });

    it('reverse [1]', () => {
        expect(reverseList([1])).to.deep.equal([1]);
    });

    it('reverse [5, 3, 2, 9]', () => {
        expect(reverseList([5, 3, 2, 9])).to.deep.equal([9, 2, 3, 5]);
    });

    it('reverse [5, 3, 7, 2, 9]', () => {
        expect(reverseList([5, 3, 7, 2, 9])).to.deep.equal([9, 2, 7, 3, 5]);
    });

    it('reverse [90, 0.3, 2, -5, 2, 4]', () => {
        expect(reverseList([90, 0.3, 2, -5, 2, 4])).to.deep.equal([4, 2, -5, 2, 0.3, 90]);
    });
});
