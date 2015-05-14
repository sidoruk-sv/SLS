QUnit.test( "sFilter test", function( assert ) {
  assert.ok(typeof sFilter == 'function', "sFilter is a function");
  assert.notOk(sFilter(), "test if no list provided");
  assert.deepEqual(sFilter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }), [2,4,6], "filter even numbers");
});
