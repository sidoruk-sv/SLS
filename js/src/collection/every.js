function sEvery (array, predicate) {
  if (!array) return;
  var buffArray = [];

  if (Object.prototype.toString.call(array) !== '[object Array]') {
    for (var key in array) {
      if (array.hasOwnProperty(key)) {
         buffArray.push(!!array[key] === predicate)
      }
    }
  } else {
    for (var i = 0; i < array.length; i++) {
      buffArray.push(!!array[i] === predicate)
    }
  }
  return !sSome(buffArray, false);
};
