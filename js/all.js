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

function sFilter (array, iterator) {
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

function sReduce (list, iterator, memo){
  if (!list) return;
  if (!iterator) return;
  var  num, result,
  index = 0,
  collection = list;

  if (Object.prototype.toString.call(collection) !== '[object Array]') {
    if(!memo){
        memo = ''
    }
    var keys = Object.keys(collection)
    while (keys[index]) {
      memo = iterator(memo, collection[keys[index]], index, collection)
      index = index + 1
    }
    return memo
  } else {
    if(!memo){
        memo = 0
    }

    while (collection[index]){
  	  memo = iterator(memo, collection[index], index, collection)
  	  index = index + 1
 	  }
 	  return memo
  }
}
function sReduceRight(list, iterator, memo){
  if (!list) return;
  if (!iterator) return;
  var  num, result, collection = list, lastIndex;

  if (Object.prototype.toString.call(collection) !== '[object Array]') {
    if(!memo){
        memo = ''
    }

    var keys = Object.keys(collection);
    lastIndex = keys.length - 1;

    while (keys[lastIndex]) {
      memo = iterator(memo, collection[keys[lastIndex]], lastIndex, collection);
      lastIndex = lastIndex - 1;
    }
    return memo;

  } else {

    if(!memo){
        memo = 0;
    }

    lastIndex =  collection.length - 1;

    while (collection[lastIndex]){
  	  memo = iterator(memo, collection[lastIndex], lastIndex, collection);
  	  lastIndex = lastIndex - 1;
 	  }

 	  return memo;
  }
}
function sReject (array, iterator) {
  if (!array) return;
  if (!iterator) return array;
  var buffArray = [];

  if (Object.prototype.toString.call(array) !== '[object Array]') {

    for (var key in array) {
      if (array.hasOwnProperty(key)) {
        if (!iterator(array[key], key, array)) {
          buffArray.push(array[key])
        }
      }
    }

  } else {

    for (var i = 0; i < array.length; i++) {
      if (!iterator(array[i])) {
        buffArray.push(array[i]);
      }
    }
  }
  return buffArray;
};

function sSize(list){
  if (!list) return;

  if (Object.prototype.toString.call(list) !== '[object Array]') {
    var keys = Object.keys(list)
    return keys.length
  } else {
    return list.length
  }

}
var  sSome = function (array, predicate) {
  if (!array) return;
  if (typeof predicate === 'undefined'){
    predicate = true;
  }

  if (Object.prototype.toString.call(array) !== '[object Array]') {
    for (var key in array) {
      if (array.hasOwnProperty(key)) {
        if (!!array[key] === predicate){
          return true;
        }
      }
    }
  } else {
    for (var i = 0; i < array.length; i++) {
      if (typeof predicate === 'function'){
        if (predicate(array[i])){
          return true;
        }

      } else {
        if (!!array[i] === predicate){
          return true;
        }
      }

    }
  }
  return false;
};

sWhere = function (array, iterator) {
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

}
