QUnit.test("sFirst tests", function (assert) {
  assert.equal(sFirst([0,1,2,3,4,5,6,7,8,9]), 0, 'first element selected');
  assert.deepEqual(sFirst([0,1,2,3,4,5,6,7,8,9],5), [0,1,2,3,4], 'first five elements selected');
  assert.equal(sFirst([3]), 3, 'first element of single member array selected');
  assert.equal(sFirst([3],5), 3, 'first five elements of single member array selected');

  assert.notOk(sFirst(), 'no arguments');
});
