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