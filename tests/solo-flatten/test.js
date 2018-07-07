const should = require('should');
const flatten = require('../../packages/solo-flatten');

describe('Array Flatten', () => {
  describe('Flat array', () => {
    it('Should return array', () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      flatten(arr).should.be.instanceof(Array).and.deepEqual(arr);
    });
  });
  describe('Nested array', () => {
    it('Should return array', () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const nest = [1, [2, 3, 4], [5, 6, 7], 8, 9, 10];
      flatten(nest).should.be.instanceof(Array).and.deepEqual(arr);
    });
  });
  describe('Nested array of mixed objects', () => {
    it('Should return array', () => {
      const arr = [1, { key1: 1, key2: 2 }, 3, 4, 5, 6, 7, 8, 9, 10];
      const nest = [1, [{ key1: 1, key2: 2 }, 3, 4], [5, 6, 7], 8, 9, 10];
      flatten(nest).should.be.instanceof(Array).and.deepEqual(arr);
    });
  });
  describe('Non array object', () => {
    it('Should return empty array', () => {
      flatten({}).should.be.instanceof(Array).and.deepEqual([]);
    });
  });
});
