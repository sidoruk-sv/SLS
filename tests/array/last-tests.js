QUnit.test("sLast tests", function (assert) {
  assert.equal(sLast([9,8,7,6,5,4,3,2,1,0]), 0, 'last element selected');
  assert.deepEqual(sLast([9,8,7,6,5,4,3,2,1,0], 2), [1,0], 'last two elements selected');
  assert.equal(sLast([3]), 3, 'last element of single member array selected');
  assert.equal(sLast([3], 5), 3, 'last five elements of single member array selected');

  assert.notOk(sLast(), 'no arguments');
});
