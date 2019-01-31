const { expect } = require('chai');

const countNumOfWords = require('./index');

describe('countNumOfWords', () => {
    it('count "helloWorld"', () => {
        expect(countNumOfWords('helloWorld')).to.equal(2);
    });

    it('count "accab"', () => {
        expect(countNumOfWords('accab')).to.equal(1);
    });

    it('count "isThisEasy"', () => {
        expect(countNumOfWords('isThisEasy')).to.equal(3);
    });

    it('count "countNumOfWords"', () => {
        expect(countNumOfWords('countNumOfWords')).to.equal(4);
    });

    it('count "letUsBuildSomethingGreat"', () => {
        expect(countNumOfWords('letUsBuildSomethingGreat')).to.equal(5);
    });

    it('count "a"', () => {
        expect(countNumOfWords('a')).to.equal(1);
    });
});
