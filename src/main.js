// @ts-nocheck
import Vue from "vue";
import App from "./App";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import router from "./router";

// 引入公共资源
import "./styles/reset.css";
import "./plugins/element.js";

Vue.config.productionTip = false;
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  render: (h) => h(App),
  // 应用router
  router,
}).$mount("#app");
