function sRest(array, n){
  if (!array) return;
  var length = array.length;
  n = typeof n !== 'undefined' ? n-1 : 1;

  return array.slice(n, length)

}