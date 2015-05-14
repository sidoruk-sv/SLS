QUnit.test( "sFilter test", function( assert ) {
  assert.deepEqual(sFilter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }), [2,4,6], "filter even numbers");
});
