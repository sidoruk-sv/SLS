QUnit.test("sSize tests", function (assert) {
  assert.equal(sSize([0, 1, 2, 3, 'asd', [11,2,3], {asd:'ds', add:'adsa'}]), 7, 'detect size array');
  assert.equal(sSize({a:'a', b:'b', c:'c'}), 3, 'detect size object');
  assert.equal(sSize({some: {a:'a'}, another:{b:'b'}, object:{c:'c'}, yep:{d:'d'}}), 4, 'detect size object');
  assert.equal(sSize([0, 0, 0, 0,0]), 5, 'detect size array');
});