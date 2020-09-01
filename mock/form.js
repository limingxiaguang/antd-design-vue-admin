function form(medthod) {
  let res = null;
  switch (medthod) {
    case "GET":
      res = { message: "OK" };
      break;
    default:
      res = null;
  }
  return res;
}
module.exports = form;
