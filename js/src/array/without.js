function sWithout() {
  var array, args, excludedElements,result;

  array = arguments[0]
  if (!array) return;

  args = sToArray(arguments)
  excludedElements = args.splice(1, args.length);
  if (excludedElements.length < 1) {
    return array;
  }
  
  result = sFilter(array, function(element){
    return excludedElements.indexOf(element) < 0
  })

  return result;
}