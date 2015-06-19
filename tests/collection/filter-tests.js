QUnit.test( "sFilter test", function( assert ) {
  assert.deepEqual(sFilter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }), [2,4,6], "filter even numbers");
  assert.deepEqual(sFilter([1, 2, 3]), [1, 2, 3], "sFilter, test if no iterator function");
  assert.deepEqual(sFilter({a:1, b:{ a:1, b:2}, c:{a:1, b:3}, d:{b:2, c:3, d:4}}, function (value, key, list) { return value['b'] === 2; }), [{a:1, b:2}, {b:2, c:3, d:4}], "filter values in object");
  assert.notOk(sFilter(), "sFilter, test if no list provided");
});
