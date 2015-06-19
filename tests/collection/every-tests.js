QUnit.test( "sEvery test", function( assert ) {
  assert.ok(sEvery([1,1,1], true), 'check ok if true in [1,1,1]');
  assert.ok(sEvery([true, 1], true), 'check ok if true in [true, 1]');
  assert.ok(sEvery([true, '0', 1, 'false', 'undefined', {a:'a'}, [0]], true), 'check ok, if true in array');
  assert.ok(sEvery([0, null, false, undefined, ''], false), 'check ok, if false in array of falsy');

  assert.notOk(sEvery([true, '', false, 0,1, undefined, 'undefined', null, 'null'], true), 'check not ok');
});
