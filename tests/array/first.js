QUnit.test("sFirst tests", function (assert) {
  assert.equal(sFirst([0,1,2,3,4,5,6,7,8,9,0]), 0, 'first element selected');
  assert.deepEqual(sFirst([0,1,2,3,4,5,6,7,8,9,0],5), [0,1,2,3,4], 'first five elements selected');

  assert.notOk(sFirst(), 'no arguments');
  assert.notOk(sFirst(1,2), 'wrong arguments');
});
