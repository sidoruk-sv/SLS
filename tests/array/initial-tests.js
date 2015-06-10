QUnit.test("sInitial tests", function (assert) {
  assert.deepEqual(sInitial([0,1,2,3,4,5,6,7,8,9]), [0,1,2,3,4,5,6,7,8], 'initial array ');
  assert.deepEqual(sInitial([0,1,2,3,4,5,6,7,8,9], 2), [0,1,2,3,4,5,6,7], 'initial array but without 2');
  assert.deepEqual(sInitial([3]), [], 'initial on an single member array');
  assert.deepEqual(sInitial([3], 5), [], 'initial on an single member array without 5');

  assert.notOk(sInitial(), 'no arguments');
});
