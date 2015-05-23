QUnit.test("Some tests", function (assert) {
  assert.ok(sSome([1, 2, 3, 4, 5, 6], 5), 'if number in array');
  assert.ok(sSome({a:1, b:2, c:3}, 2), 'if number in object value');

  assert.notOk(sSome([null, 1,23,3], false), 'if false in array');
  assert.notOk(sSome([1, undefined, 1,23,3], false), 'if false in array');
  assert.notOk(sSome([1, 0, 1,23,3], false), 'if false in array');
  assert.notOk(sSome([1, 2, 3, 4, 5, 6], false), 'if false in array of values');
  assert.notOk(sSome([1, 2, 3, 4, 5, 6], false), 'if number in array');
  assert.notOk(sSome({a:1, b:2, c:3}, 5), 'if number in object value');
});