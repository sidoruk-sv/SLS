function sFirst(array, n){
  if (!array) return;
  n = typeof n !== 'undefined' ? n : 1;

  return array.slice(0, n)

}