QUnit.test("Initial tests", function (assert) {
  assert.notOk(sMap(), "sMap, test if no list provided");
  assert.deepEqual(sMap([1, 2, 3]), [1, 2, 3], "sMap, test if no iterator function");


  assert.notOk(sFilter(), "sFilter, test if no list provided");
  assert.deepEqual(sFilter([1, 2, 3]), [1, 2, 3], "sFilter, test if no iterator function");

//  assert.notOk(sForEach(), "sForEach, test if no list provided");
//  assert.notOk(sForEach([]), "sForEach, test if no iterator provided");

});
