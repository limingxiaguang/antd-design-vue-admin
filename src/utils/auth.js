// 读取当前的用户
export function getCurrentAuthority() {
  return ["admin"];
}
// 校验当前用户的权限
export function check(authority) {
  const current = getCurrentAuthority();
  return current.some(item => authority.includes(item));
}
// 判断是否登录
export function isLogin() {
  const current = getCurrentAuthority();
  return current && current[0] !== "guest";
}
