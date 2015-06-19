function sSize(list){
  if (!list) return;

  if (Object.prototype.toString.call(list) !== '[object Array]') {
    var keys = Object.keys(list)
    return keys.length
  } else {
    return list.length
  }

}