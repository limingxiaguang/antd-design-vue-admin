function chart(medthod) {
  let res = null;
  switch (medthod) {
    case "GET":
      res = [20, 40, 78, 10, 30, 100];
      break;
    default:
      res = null;
  }
  return res;
}
module.exports = chart;
