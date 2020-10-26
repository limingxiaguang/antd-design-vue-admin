import Vue from "vue";
import VueI18n from "vue-i18n";
import queryString from "query-string";
import VueHighLightJS from "vue-highlightjs";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import enUS from "./locale/enUS";
import zhCN from "./locale/zhCN";
import {
  Button,
  Layout,
  Menu,
  Icon,
  Drawer,
  Radio,
  Form,
  Input,
  Select,
  ConfigProvider,
  Dropdown,
  DatePicker
} from "ant-design-vue";
import Authorized from "./components/Authorized";
import Auth from "./directives/auth";
import "highlightjs/styles/github.css";

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Form);
Vue.use(Input);
Vue.use(Select);
Vue.use(ConfigProvider);
Vue.use(Dropdown);
Vue.use(DatePicker);
// 权限校验的指令
Vue.use(Auth);
Vue.use(VueI18n);
Vue.use(VueHighLightJS);

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2038453_l5cm449mvw.js" // 在 iconfont.cn 上生成
});

const i18n = new VueI18n({
  locale: queryString.parse(location.search).locale || "zhCN",
  messages: {
    zhCN: { messages: zhCN },
    enUS: { messages: enUS }
  }
});

// 权限校验的组件
Vue.component("Authorized", Authorized);
Vue.component("IconFont", IconFont);
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
