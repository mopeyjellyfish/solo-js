function flatten(arr) {
  return Array.isArray(arr) ? arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), []) : [];
}
module.exports = flatten;
