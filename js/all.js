var  sContains = function (array, predicate) {
  if (!array) return;

  if (Object.prototype.toString.call(array) !== '[object Array]') {
    for (var key in array) {
      if (array.hasOwnProperty(key)) {
        if (array[key] == predicate){
          return true
        }
      }
    }
  } else {
    for (var i = 0; i < array.length; i++) {
      if (array[i] == predicate){
        return true
      }
    }
  }

  return false;
};

function sCountBy (list, iteratee) {
  return
}
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
          buffArray.push(array)
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
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sGroupBy (list, iteratee) {
  return
}
function sIndexBy (list, iteratee) {
  return
}

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

function sSample(list, n){
  if (!list) return;
  n = typeof n !== 'undefined' ? n : 1;
  var buffArray=[], i;

  if (Object.prototype.toString.call(list) !== '[object Array]') {
    for (var key in array) {
      console.log('list,n', list,n)
    }
  } else {
    for (i = 0; i < n; i++) {
      randomIndex = getRandomInt(0, list.length-1)
      buffArray.push(list[randomIndex])
    }
  }

  console.log('list, n,buffarray',list,n, buffArray)
  if (buffArray.length < 2){
    result = buffArray[0]
  } else {
    result = buffArray
  }
  return result

}
function sShuffle (list){
  if (!list) return;
  var n = list.length,
  buffArray = [];

  if (Object.prototype.toString.call(list) !== '[object Array]') {
    for (var key in list) {
      if (list.hasOwnProperty(key)) {
        iterator(list[key], key, list)
      }
    }
  } else {
    for (var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    for (var i = 0; i < list.length; i++) {
      buffArray.push(list[randomNumber])
    }

  }
//  Для тасования массива a из n элементов (индексы 0..n-1):
//  для всех i от n − 1 до 1 выполнить
//       j ← случайное число 0 ≤ j ≤ i
//       обменять местами a[j] и a[i]


  result = list
  return result
}
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

sWhere = function (list, properties) {
  if (!list) return;
  if (!properties) return;
  var buffArray = [];

  if (Object.prototype.toString.call(list) !== '[object Array]') {
    for (var key in list) {
      if (list.hasOwnProperty(key)) {
//      Ромка и Игорь предложили Filter

      }
    }

  } else {
    for (var i = 0; i < list.length; i++) {
        buffArray.push(sFilter(list[i], function(el, key, list) {
                                 return el[key] === properties[key]
                               }))
    }
  }
  return buffArray;
}

function sCompact (array) {
  if (!array) return;
  return sFilter(array, function (el) {
    return !!el
  });
}
function sFirst(array, n){
  if (!array) return;
  n = typeof n !== 'undefined' ? n : 1;

  return array.slice(0, n)

}
function sInitial(array, n){
  if (!array) return;
  var length = array.length;
  if (typeof n !== 'undefined') {
    if ( n >= length){
      n = length - 1
    } else {
      n = length - n
    }
  } else {
    var n = length - 1
  }

  return array.slice(0, n)

}
function sLast(array, n){
  if (!array) return;
  if (typeof n !== 'undefined') {
    if ( n >= array.length){
      n = 0
    } else {
      n = array.length - n
    }
  } else {
    n = array.length - 1
  }
  return array.slice(n, array.length)
}
function sRest(array, n){
  if (!array) return;
  var length = array.length;
  n = typeof n !== 'undefined' ? n-1 : 1;

  return array.slice(n, length)

}