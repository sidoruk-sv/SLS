QUnit.test("sWithout tests", function (assert) {
  assert.deepEqual(sWithout([1,0], 0), [1], 'without one element');
  assert.deepEqual(sWithout([3,2,1,0, 0 ,0, '0', 'test'], 2,0,'test'), [3, 1, '0'], 'without 0,2 and test, but no \'0\'');
  assert.deepEqual(sWithout([3]), [3], 'no elements and single member array');
  assert.deepEqual(sWithout([3], 3), [], 'without one element in single element array');

  assert.notOk(sWithout(), 'no arguments');
});

