/**
 * 只有第一次的时候才会去校验控制，
 * 权限动态更改的的时候没办法再去改变
 */
import { check } from "../utils/auth";

function install(Vue, option = {}) {
  Vue.directive(option.name || "auth", {
    inserted(el, binding) {
      if (!check(binding.value)) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    }
  });
}
export default { install };
