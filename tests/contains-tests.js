QUnit.test( "sContains test", function( assert ) {
  assert.ok(sContains([1,1,1], true), 'check ok if true in [1,1,1]');
  assert.ok(sContains([true, 1], true), 'check ok if true in [true, 1]');
  assert.ok(sContains([true, '0', 1, 'false', 'undefined', {a:'a'}, [0]], true), 'check ok, if true in array');
  assert.ok(sContains([0, null, false, undefined, ''], false), 'check ok, if false in array of falsy');

  assert.notOk(sContains(['', false, 0, undefined, null], true), 'check not ok');
});
