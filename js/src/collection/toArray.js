function sToArray (list) {
  var buffArray = [], buffObject = {};


  if (Object.prototype.toString.call(list) === '[object Arguments]'){
    for (key in list) {
      buffArray.push(list[key])
    }
  } else if (Object.prototype.toString.call(list) !== '[object Array]') {
    for (key in list) {
      if (list.hasOwnProperty(key)) {
        buffObject[key] = list[key]
        buffArray.push(buffObject)
        buffObject = {}
      }
    }
  } else {
    for (key in list) {
      buffArray.push(list[key])
    }
  }

  return buffArray;
};
