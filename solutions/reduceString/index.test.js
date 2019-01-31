const { expect } = require('chai');

const reduceString = require('./index');

describe('reduceString', () => {
    it('reduce "aabbcc"', () => {
        expect(reduceString('aabbcc')).to.equal('');
    });

    it('reverse "accab"', () => {
        expect(reduceString('accab')).to.equal('b');
    });

    it('reverse "acaabddca"', () => {
        expect(reduceString('acaabddca')).to.equal('acbca');
    });

    it('reverse ""', () => {
        expect(reduceString('')).to.equal('');
    });

    it('reverse "cbacba"', () => {
        expect(reduceString("cbacba")).to.equal('cbacba');
    });

    it('reverse "abcbb"', () => {
        expect(reduceString("abcbb")).to.equal('abc');
    });
});
