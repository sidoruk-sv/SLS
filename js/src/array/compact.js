function sCompact (array) {
  if (!array) return;
  return sFilter(array, function (el) {
    return !!el
  });
}