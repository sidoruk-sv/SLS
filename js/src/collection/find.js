function sFind (list, predicate) {
  if (!list) return;
  if (!predicate) return list;
  var keys;
  var searchElement;
  var firstTime = true;

  if (list instanceof Array) {
    list.reduce(function(memo, element) {
      var isFinded = predicate(element)

      if (isFinded && firstTime) {
        searchElement = element
        firstTime = false
      }
      memo = element
      return memo
    }, undefined);
  } else if (typeof list === 'object') {
    keys = Object.keys(list)
    keys.reduce(function(memo, key) {
      var element = list[key]
      var isFinded = predicate(element)

      if (isFinded && firstTime) {
        memo = {}
        memo[key] = element
        searchElement = memo
        firstTime = false
      }
      memo = element
      return memo
    }, undefined);
  }

  return searchElement;
};
