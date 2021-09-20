const tail = require('../tail');

const assert = require('chai').assert;




describe('#tail', () => {
  it("should return 2 for ['Hello', 'Lighthouse', 'Labs'].length", () => {
    assert.strictEqual(tail(['Hello', 'Lighthouse', 'Labs']).length, 2);
  });
  it("first elemt of ['Hello', 'Lighthouse', 'Labs'] should be 'Lighthouse' ", ()=> {
    assert.strictEqual(tail(['Hello', 'Lighthouse', 'Labs'])[0], "Lighthouse");
  });
  it("second elemt of ['Hello', 'Lighthouse', 'Labs'] should be 'Labs' ", ()=> {
    assert.strictEqual(tail(['Hello', 'Lighthouse', 'Labs'])[1], "Labs");
  });
  it("original array should still have 3 elements", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });
});