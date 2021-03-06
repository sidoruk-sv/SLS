function sForEach (array, iterator) {
  if (!array) return;
  if (!iterator) return;

  if (Object.prototype.toString.call(array) !== '[object Array]') {
    for (var key in array) {
      if (array.hasOwnProperty(key)) {
        iterator(array[key], key, array)
      }
    }
  } else {

    for (var i = 0; i < array.length; i++) {
      iterator(array[i])
    }

  }
};