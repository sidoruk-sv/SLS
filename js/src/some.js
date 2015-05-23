var  sSome = function (array, predicate) {
  if (!array) return;
  if (!predicate) {
    predicate = true
  };

  if (Object.prototype.toString.call(array) !== '[object Array]') {
    for (var key in array) {
      if (array.hasOwnProperty(key)) {
        return array[key] === predicate
      }
    }
  } else {
    for (var i = 0; i < array.length; i++) {
      return array[i] === predicate
    }
  }
  return buffArray;
};
