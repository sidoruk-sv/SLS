QUnit.test("sCompact tests", function (assert) {
  assert.deepEqual(sCompact([0, 1, false, 2, '', 3]), [1,2,3], 'first element selected');
  assert.deepEqual(sCompact([0,1,2,3,4,5,6,7,8,9]), [1,2,3,4,5,6,7,8,9], 'first five elements selected');
  assert.deepEqual(sCompact([1,2, 'false', 'true']), [1,2, 'false', 'true'], 'no arguments');

  assert.notOk(sCompact(), 'no arguments');
});

