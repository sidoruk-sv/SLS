QUnit.test( "sContains test", function( assert ) {
  assert.ok(sContains([1,1,1], true), 'check ok if true in [1,1,1]');
  assert.ok(sContains([true, 1], true), 'check ok if true in [true, 1]');
  assert.ok(sContains([true, '0', 1, 'false', 'undefined', {a:'a'}, [0]], true), 'check ok, if true in array');
  assert.ok(sContains([0, null, false, undefined, ''], false), 'check ok, if false in array of falsy');

  assert.notOk(sContains(['', false, 0, undefined, null], true), 'check not ok');
});

QUnit.test( "sEvery test", function( assert ) {
  assert.ok(sEvery([1,1,1], true), 'check ok if true in [1,1,1]');
  assert.ok(sEvery([true, 1], true), 'check ok if true in [true, 1]');
  assert.ok(sEvery([true, '0', 1, 'false', 'undefined', {a:'a'}, [0]], true), 'check ok, if true in array');
  assert.ok(sEvery([0, null, false, undefined, ''], false), 'check ok, if false in array of falsy');

  assert.notOk(sEvery([true, '', false, 0,1, undefined, 'undefined', null, 'null'], true), 'check not ok');
});

QUnit.test( "sFilter test", function( assert ) {
  assert.deepEqual(sFilter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }), [2,4,6], "filter even numbers");
  assert.deepEqual(sFilter([1, 2, 3]), [1, 2, 3], "sFilter, test if no iterator function");

  assert.notOk(sFilter(), "sFilter, test if no list provided");
});

QUnit.test( "sFind test", function( assert ) {
  assert.deepEqual(sMap([1, 2, 3], function(num){ return num * 3; }), [3,6,9], " [Array], -> el *3");
  assert.equal(sFind([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }), 2, 'find even number in array');
});

QUnit.test( "sForEach test", function( assert ) {
	var a = [1,2,3], b = [];
	sForEach(a, function(el){ b.push(el + 1)})
	deepEqual(b, [2, 3, 4], 'each x+1')

	var c = [1,2,3], d = [];
	sForEach(c, function(el){ d.push(el * 3)})
	deepEqual(d, [3, 6, 9], 'each x*3');

	assert.notOk(sForEach(), "test if nothing provided");
	assert.notOk(sForEach([1,2,3]), "test if no iterator provided");
	assert.notOk(sForEach([], function (el) { alert(el)}), "test if empty array provided");

});

QUnit.test( "sMap test", function( assert ) {
  assert.deepEqual(sMap([1, 2, 3], function(num){ return num * 3; }), [3,6,9], " [Array], -> el *3");
  assert.deepEqual(sMap({one : 1, two : 2, three : 3}, function(num){ return num * 3; }), [3,6,9], " [Object], -> el *3");
  assert.deepEqual(sMap([1, 2, 3]), [1, 2, 3], " test if no iterator function");

  assert.notOk(sMap(), " test if no list provided");
  

});

QUnit.test("sReduceRight tests", function (assert) {

  assert.deepEqual(sReduceRight([[0, 1], [2, 3], [4, 5]], function(a, b) { return a.concat(b); }, []), [4, 5, 2, 3, 0, 1], " array of arrays to array of elements");
});
QUnit.test("sReduce tests", function (assert) {
  assert.equal(sReduce([1, 2, 3, 4], function(memo, current){ return memo + current}, 200), 210, 'memo + current');
  assert.equal(sReduce([1, 2, 3, 4], function(memo, current){ return memo * current}, 1), 24, 'memo * current');
  assert.equal(sReduce({a:'a', b:'b', c:'c'}, function(memo, current){ return memo + current}, 1), '1abc', 'objects memo + current');
  assert.equal(sReduce([1, 2, 3], function(memo, current) { return memo + current; }), 6, '[1,2,3] (memo + current) === [1,2,3] (memo*current)');
  assert.deepEqual(sReduce([[1,2], [3, 4], [5,6,7,[8,9]]], function(memo, current) { return memo.concat(current); }, []), [1,2,3,4,5,6,7,[8,9]], '[1,2,3] (memo + current) === [1,2,3] (memo*current)');

  assert.notOk(sReduce(), "test if no list provided");
  assert.notOk(sReduce([1, 2, 3]), "test if no iterator function");
  assert.notEqual(sReduce([1, 1, 1, 1], function(memo, current){ return memo * current}), 2, 'memo * current');
});
QUnit.test("sReject tests", function (assert) {
  assert.deepEqual(sReject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }), [1,3,5], 'get odds by reject evens');
});
QUnit.test("Size tests", function (assert) {
  assert.equal(sSize([0, 1, 2, 3, 'asd', [11,2,3], {asd:'ds', add:'adsa'}]), 7, 'detect size array');
  assert.equal(sSize({a:'a', b:'b', c:'c'}), 3, 'detect size object');
  assert.equal(sSize([0, 0, 0, 0,0]), 5, 'detect size array');
});
QUnit.test("sSome/sSome tests", function (assert) {
  assert.ok(sSome([1, 2, 3, 4, 5, 6]), 'default array working');
  assert.ok(sSome({a:1, b:2, c:3}), 'default object working');
  assert.ok(sSome({a:'s',as:undefined, d:null,f:[]}), 'find in set of falsy');
  days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  assert.ok(sSome(days, function(day) { return day.toLowerCase() === 'monday' }), 'find monday in array')

  assert.notOk(sSome(days, function(day) { return day.toLowerCase === 'june' }), 'cant find june in array')
  assert.notOk(sSome([false, null,0,undefined]), 'anything in array of falsy');
  assert.notOk(sSome({a: false, b: null, c:0, d:undefined}), 'anything in object with falsy values');
});

QUnit.test( "sWhere test", function( assert ) {
  var listOfPlays = [
    {title: "Cymbeline", author: "Shakespeare", year: 1611},
    {title: "The Tempest", author: "Shakespeare", year: 1611},
    {title: "The asdasdasd", author: "asdasdas", year: 113213},
    {title: "The a", author: "asdass", year: 113123}
  ]

  assert.deepEqual(sWhere(listOfPlays, {author: "Shakespeare", year: 1611}),[{title: "Cymbeline", author: "Shakespeare", year: 1611}, {title: "The Tempest", author: "Shakespeare", year: 1611}],"find where some stuff")

});
