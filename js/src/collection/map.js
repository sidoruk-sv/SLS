function sMap (list, iteratee) {
  if (!list) return;
  if (!iteratee) return list;
  var keys;

  if (list instanceof Array) {
    return list.reduce(function(memo, element, b,v) {
      result = iteratee(element)

      if (typeof memo === 'undefined') {
        memo = [result]
      } else {
        memo.push(result)
      }
      return memo
    }, undefined);
  }

  if (typeof list === 'object') {
    keys = Object.keys(list)
    return keys.reduce(function(memo, key) {
      element = list[key]
      result = iteratee(element)

      if (typeof memo === 'undefined') {
        memo = [result]
      } else {
        memo.push(result)
      }
      return memo
    }, undefined);
  }

};
