function sMap (array, iterator) {
  if (!array) return;
  if (!iterator) return array;
  var buffArray = [];

  if (Object.prototype.toString.call(array) !== '[object Array]') {

    for (var key in array) {
      if (array.hasOwnProperty(key)) {
        buffArray.push(iterator(array[key], key, array))
      }
    }

  } else {

    for (var i = 0; i < array.length; i++) {
      buffArray[i] = iterator(array[i]);
    }

  }
  return buffArray;
};
