sFilter = function (array, iterator) {
  if (!array) return;
  if (!iterator) return array;
  var buffArray = [];

  if (Object.prototype.toString.call(array) !== '[object Array]') {

    for (var key in array) {
      if (array.hasOwnProperty(key)) {
        if (iterator(array[key], key, array)) {
          buffArray.push(array[key])
        }
      }
    }

  } else {

    for (var i = 0; i < array.length; i++) {
      if (iterator(array[i])) {
        buffArray.push(array[i]);
      }
    }

  }
  return buffArray;
};
