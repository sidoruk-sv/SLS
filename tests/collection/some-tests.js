QUnit.test("sSome/sSome tests", function (assert) {
  assert.ok(sSome([1, 2, 3, 4, 5, 6]), 'default array working');
  assert.ok(sSome({a:1, b:2, c:3}), 'default object working');
  assert.ok(sSome({a:'s',as:undefined, d:null,f:[]}), 'find in set of falsy');
  days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  assert.ok(sSome(days, function(day) { return day.toLowerCase() === 'monday' }), 'find monday in array')

  assert.notOk(sSome(days, function(day) { return day.toLowerCase === 'june' }), 'cant find june in array')
  assert.notOk(sSome([false, null,0,undefined]), 'anything in array of falsy');
  assert.notOk(sSome({a: false, b: null, c:0, d:undefined}), 'anything in object with falsy values');
});
