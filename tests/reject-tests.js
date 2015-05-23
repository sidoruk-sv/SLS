QUnit.test("sReject tests", function (assert) {
  assert.deepEqual(sReject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }), [1,3,5], 'get odds by reject evens');
});