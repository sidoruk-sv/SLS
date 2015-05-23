sReduceRigth = function (list, iterator, memo){
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