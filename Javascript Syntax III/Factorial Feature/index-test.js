// For running these tests in the text editor on Codecademy NPM package Mocha was used.

var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('output of 5! is equal to 120', ()=> {
      const expectedResult = 120;
      const inputNumber = 5;
      const result = Calculate.factorial(inputNumber);

      assert.equal(result, expectedResult);
    });

    it('output of 3! is equal to 6', ()=> {
      const expectedResult = 6;
      const inputNumber = 3;
      const result = Calculate.factorial(inputNumber);

      assert.equal(result, expectedResult);
    });

    it('output of 0! is equal to 1', ()=> {
      const expectedResult = 1;
      const inputNumber = 0;
      const result = Calculate.factorial(inputNumber);

      assert.equal(result, expectedResult);
    });
  });
});