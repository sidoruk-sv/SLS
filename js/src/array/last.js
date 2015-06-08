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