QUnit.test( "sFilter test", function( assert ) {
  assert.deepEqual(sFilter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }), [2,4,6], "filter even numbers");
});

//QUnit.test( "sForEach test", function( assert ) {
//});

QUnit.test("Initial tests", function (assert) {
  assert.notOk(sMap(), "sMap, test if no list provided");
  assert.deepEqual(sMap([1, 2, 3]), [1, 2, 3], "sMap, test if no iterator function");


  assert.notOk(sFilter(), "sFilter, test if no list provided");
  assert.deepEqual(sFilter([1, 2, 3]), [1, 2, 3], "sFilter, test if no iterator function");

  assert.notOk(sForEach(), "sForEach, test if no list provided");
  assert.notOk(sForEach([]), "sForEach, test if no iterator provided");

});

QUnit.test( "sMap test", function( assert ) {
  assert.deepEqual(sMap([1, 2, 3], function(num){ return num * 3; }), [3,6,9], "map [Array], -> el *3");
  assert.deepEqual(sMap({one : 1, two : 2, three : 3}, function(num){ return num * 3; }), [3,6,9], "map [Object], -> el *3");
});
