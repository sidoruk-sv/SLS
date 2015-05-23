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