QUnit.test("sReduceRight tests", function (assert) {

  assert.deepEqual(sReduceRight([[0, 1], [2, 3], [4, 5]], function(a, b) { return a.concat(b); }, []), [4, 5, 2, 3, 0, 1], " array of arrays to array of elements");
});