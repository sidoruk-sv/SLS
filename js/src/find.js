function sFind (array, iterator) {
  if (!array) return;
  if (!iterator) return array;

  if (Object.prototype.toString.call(array) !== '[object Array]') {
    for (var key in array) {
      if (array.hasOwnProperty(key)) {
        if (iterator(array[key])) {
          return array[key];
        }
      }
    }
  } else {
    for (var i = 0; i < array.length; i++) {
      if (iterator(array[i])) {
        return array[i];
      }
    }
  }
};
