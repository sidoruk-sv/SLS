var  sContains = function (array, predicate) {
  if (!array) return;
  var result;

  if (Object.prototype.toString.call(array) !== '[object Array]') {
    for (var key in array) {
      if (array.hasOwnProperty(key)) {
        if (array[key] == predicate || typeof array[key] === 'undefined'){
          result = true
        }
      }
    }
  } else {
    for (var i = 0; i < array.length; i++) {
      if (array[i] == predicate){
        result = true
      }
    }
  }
  return result;
};
