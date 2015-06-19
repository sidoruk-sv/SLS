function sSize (list){
  if (!list) return;
  var length = 0;

  if (typeof list === 'object') {
    list = Object.keys(list)
  }

  return list.reduce(function (memo, element){
    if (element != null) { length += 1 }
    memo = length
    return memo
  }, undefined)

}