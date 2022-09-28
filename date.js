//exporting our function
// important >> module.exports === exports
module.exports = getDate;

function getDate() {
  options = { weekday: "long", month: "long", day: "numeric" };
  const today = new Date();
  const day = today.toLocaleDateString("en-US", options);

  return day;
}
