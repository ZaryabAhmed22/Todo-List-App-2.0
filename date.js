//exporting our function
// important >> module.exports === exports
exports.getDate = function () {
  options = { weekday: "long", month: "long", day: "numeric" };
  const today = new Date();
  return today.toLocaleDateString("en-US", options);
};

exports.getDay = function () {
  options = { weekday: "long" };
  const today = new Date();
  return today.toLocaleDateString("en-US", options);
};
