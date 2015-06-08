QUnit.test("sLast tests", function (assert) {
  assert.equal(sLast([9,8,7,6,5,4,3,2,1,0]), 0, 'last element selected');
  assert.deepEqual(sLast([9,8,7,6,5,4,3,2,1,0], 2), [1,0], 'last two elements selected');
  assert.deepEqual(sLast([3]), 3, 'last element of one element array selected');
  assert.deepEqual(sLast([3], 5), 3, 'last five elements of one element array selected');

  assert.notOk(sLast(), 'no arguments');
  assert.notOk(sLast(1,2), 'wrong arguments');
});
