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
