QUnit.test( "sFind test", function( assert ) {
  assert.equal(sFind([1, 2, 3], function(num){ return num === 3; }), 3, " [Array], -> el *3");
  assert.equal(sFind([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }), 2, 'find even number in array');
  assert.deepEqual(sFind({a:1,b:2,c:3}, function(num){ return num == 1; }), {a:1}, 'find even number in array');
});
