const should = require('should');
const camelCaseToWord = require('../../packages/solo-camel-case-to-words');

describe('Camel Case To Words', () => {
  describe('camelCase string', () => {
    it('Should return string', () => {
      const string = 'thisIsATestOfCamelCase';
      camelCaseToWord(string).should.be.instanceof(String).and.equal('This Is A Test Of Camel Case');
    });
  });
});
