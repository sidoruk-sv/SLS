QUnit.test( "sMap test", function( assert ) {
  assert.deepEqual(sMap([1, 2, 3], function(num){ return num * 3; }), [3,6,9], " [Array], -> el *3");
  assert.deepEqual(sMap({one : 1, two : 2, three : 3}, function(num){ return num * 3; }), [3,6,9], " [Object], -> el *3");
  assert.deepEqual(sMap([1, 2, 3]), [1, 2, 3], " test if no iterator function");

  assert.notOk(sMap(), " test if no list provided");
  

});
