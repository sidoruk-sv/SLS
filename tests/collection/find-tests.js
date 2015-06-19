QUnit.test( "sFind test", function( assert ) {
  assert.deepEqual(sMap([1, 2, 3], function(num){ return num * 3; }), [3,6,9], " [Array], -> el *3");
  assert.equal(sFind([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }), 2, 'find even number in array');
});
