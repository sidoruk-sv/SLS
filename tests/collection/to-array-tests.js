QUnit.test("toArray tests", function (assert) {
  array = [
    'Sunday',
    'Monday',
    'Saturday'
  ];
  objSimple = {
    a:1,
    b:2,
    c:3
  };
  obj = {
    a:1,
    b:2,
    c:{
      a:1,
      b:2
    },
    d:[1,2,3]
  };

  assert.deepEqual(sToArray(array), ['Sunday', 'Monday', 'Saturday'], 'array to array');
  assert.deepEqual(sToArray(objSimple), [{a:1}, {b:2}, {c:3}], 'simple object to array');
  assert.deepEqual(sToArray(obj), [{a:1}, {b:2}, {c:{a:1, b:2}}, {d:[1,2,3]}], 'variant object to array');
  assert.deepEqual((function(){ return sToArray(arguments).slice(1);})(1, 2, 3, 4), [2, 3, 4], 'arguments to array');
});
