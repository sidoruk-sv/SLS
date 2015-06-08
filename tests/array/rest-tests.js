QUnit.test("sRest tests", function (assert) {
  assert.deepEqual(sRest([0,1,2,3,4,5,6,7,8,9]), [1,2,3,4,5,6,7,8,9], 'first element selected');
  assert.deepEqual(sRest([0,1,2,3,4,5,6,7,8,9],5), [5,6,7,8,9], 'first five elements selected');
  assert.deepEqual(sRest([3]), [], 'first element of single member array selected');
  assert.deepEqual(sRest([3],5), [], 'first five elements of single member array selected');

  assert.notOk(sRest(), 'no arguments');
  assert.notOk(sRest(1,2), 'wrong arguments');
});
