// @ts-nocheck
import Vue from "vue";
import App from "./App";

import router from "./router";
import "./styles/reset.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  // 这里使用router
  router,
}).$mount("#app");
