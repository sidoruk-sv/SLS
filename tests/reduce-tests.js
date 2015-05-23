QUnit.test("Reduce tests", function (assert) {
  assert.equal(sReduce([1, 2, 3, 4], function(memo, current){ return memo + current}, 200), 210, 'memo + current');
  assert.equal(sReduce([1, 2, 3, 4], function(memo, current){ return memo * current}, 1), 24, 'memo * current');
  assert.equal(sReduce({a:'a', b:'b', c:'c'}, function(memo, current){ return memo + current}, 1), '1abc', 'objects memo + current');
  assert.equal(sReduce([1, 2, 3], function(memo, current) { return memo + current; }), 6, '[1,2,3] (memo + current) === [1,2,3] (memo*current)');
  assert.deepEqual(sReduce([[1,2], [2, 3], [3,4,5,[6,7]]], function(memo, current) { return memo.concat(current); }, []), [1,2,3,4,5,[6,7]], '[1,2,3] (memo + current) === [1,2,3] (memo*current)');

  assert.notOk(sReduce(), "test if no list provided");
  assert.notOk(sReduce([1, 2, 3]), "test if no iterator function");
  assert.notEqual(sReduce([1, 1, 1, 1], function(memo, current){ return memo * current}), 2, 'memo * current');
});