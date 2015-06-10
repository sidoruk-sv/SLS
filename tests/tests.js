QUnit.test( "sContains test", function( assert ) {
  assert.ok(sContains([1, 1, 1], true), 'check ok if true in normal array');
  assert.ok(sContains({a:1, b:1, c:1}, true), 'check ok if true in normal object');
  assert.ok(sContains([true, 1], true), 'check ok if true in [true, 1]');
  assert.ok(sContains([true, '0', 1, 'false', 'undefined', {a:'a'}, [0]], true), 'check ok, if true in array');
  assert.ok(sContains([0, null, false, undefined, ''], false), 'check ok, if false in array of falsy');

  assert.notOk(sContains(['', false, 0, undefined, null], true), 'check not ok array');
  assert.notOk(sContains({a:'', b:false, c:0, d:undefined, e:null}, true), 'check not ok object');
});

QUnit.test("sCountBy tests", function (assert) {
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
  assert.deepEqual(sFilter({a:1, b:{ a:1, b:2}, c:{a:1, b:3}, d:{b:2, c:3, d:4}}, function (value, key, list) { return value['b'] === 2; }), [{a:1, b:2}, {b:2, c:3, d:4}], "filter values in object");
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

QUnit.test("sGroupBy tests", function (assert) {
//_.groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); });
//=> {1: [1.3], 2: [2.1, 2.4]}
//
//sGroupBy(['one', 'two', 'three'], 'length');
//=> {3: ["one", "two"], 5: ["three"]}
});

QUnit.test("sIndexBy tests", function (assert) {
});

QUnit.test("sInvoke tests", function (assert) {
});

QUnit.test( "sMap test", function( assert ) {
  assert.deepEqual(sMap([1, 2, 3], function(num){ return num * 3; }), [3,6,9], " [Array], -> el *3");
  assert.deepEqual(sMap({one : 1, two : 2, three : 3}, function(num){ return num * 3; }), [3,6,9], " [Object], -> el *3");
  assert.deepEqual(sMap([1, 2, 3]), [1, 2, 3], " test if no iterator function");

  assert.notOk(sMap(), " test if no list provided");
  

});

QUnit.test("sMax tests", function (assert) {
});

QUnit.test("sMin tests", function (assert) {
});

QUnit.test("sPluck tests", function (assert) {
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
QUnit.test( "sSample test", function( assert ) {

  var array = [1, 2, 3, 4, 5, 6]
  var array2 = [7, 8, 9, 10, 11, 12]
  var n = sSample(array)
  console.log('sSample(array)', sSample(array))
  console.log('sSample(array, 3)', sSample(array, 3))

  assert.equal(array.indexOf(n) > -1, true,  "random number from array: "+ n);

  assert.isOk(sSample(array, 3),  "random number from array: "+ n);

  assert.notEqual(array2.indexOf(n) > -1, true,  "random number from array: "+ n);
});

QUnit.test("sShuffle tests", function (assert) {
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

QUnit.test("sSortBy tests", function (assert) {
});

QUnit.test("toArray tests", function (assert) {
  array = [
    'Sunday',
    'Monday',
    'Saturday'
  ];
  objSimple = {
    a:1,
    b:2,
    c:3
  };
  obj = {
    a:1,
    b:2,
    c:{
      a:1,
      b:2
    },
    d:[1,2,3]
  };

  assert.deepEqual(sToArray(array), ['Sunday', 'Monday', 'Saturday'], 'array to array');
  assert.deepEqual(sToArray(objSimple), [{a:1}, {b:2}, {c:3}], 'simple object to array');
  assert.deepEqual(sToArray(obj), [{a:1}, {b:2}, {c:{a:1, b:2}}, {d:[1,2,3]}], 'variant object to array');
  assert.deepEqual((function(){ return sToArray(arguments).slice(1);})(1, 2, 3, 4), [2, 3, 4], 'arguments to array');
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

QUnit.test("sCompact tests", function (assert) {
  assert.deepEqual(sCompact([0, 1, false, 2, '', 3]), [1,2,3], 'first element selected');
  assert.deepEqual(sCompact([0,1,2,3,4,5,6,7,8,9]), [1,2,3,4,5,6,7,8,9], 'first five elements selected');
  assert.deepEqual(sCompact([1,2, 'false', 'true']), [1,2, 'false', 'true'], 'no arguments');

  assert.notOk(sCompact(), 'no arguments');
});


QUnit.test("sFirst tests", function (assert) {
  assert.equal(sFirst([0,1,2,3,4,5,6,7,8,9]), 0, 'first element selected');
  assert.deepEqual(sFirst([0,1,2,3,4,5,6,7,8,9],5), [0,1,2,3,4], 'first five elements selected');
  assert.equal(sFirst([3]), 3, 'first element of single member array selected');
  assert.equal(sFirst([3],5), 3, 'first five elements of single member array selected');

  assert.notOk(sFirst(), 'no arguments');
});

QUnit.test("sInitial tests", function (assert) {
  assert.deepEqual(sInitial([0,1,2,3,4,5,6,7,8,9]), [0,1,2,3,4,5,6,7,8], 'initial array ');
  assert.deepEqual(sInitial([0,1,2,3,4,5,6,7,8,9], 2), [0,1,2,3,4,5,6,7], 'initial array but without 2');
  assert.deepEqual(sInitial([3]), [], 'initial on an single member array');
  assert.deepEqual(sInitial([3], 5), [], 'initial on an single member array without 5');

  assert.notOk(sInitial(), 'no arguments');
});

QUnit.test("sLast tests", function (assert) {
  assert.equal(sLast([9,8,7,6,5,4,3,2,1,0]), 0, 'last element selected');
  assert.deepEqual(sLast([9,8,7,6,5,4,3,2,1,0], 2), [1,0], 'last two elements selected');
  assert.equal(sLast([3]), 3, 'last element of single member array selected');
  assert.equal(sLast([3], 5), 3, 'last five elements of single member array selected');

  assert.notOk(sLast(), 'no arguments');
});

QUnit.test("sRest tests", function (assert) {
  assert.deepEqual(sRest([0,1,2,3,4,5,6,7,8,9]), [1,2,3,4,5,6,7,8,9], 'first element selected');
  assert.deepEqual(sRest([0,1,2,3,4,5,6,7,8,9],5), [4, 5,6,7,8,9], 'first five elements selected');
  assert.deepEqual(sRest([3]), [], 'first element of single member array selected');
  assert.deepEqual(sRest([3],5), [], 'first five elements of single member array selected');

  assert.notOk(sRest(), 'no arguments');
});
