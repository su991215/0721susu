// @ts-nocheck
import Vue from "vue";
import App from "./App";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import router from "./router";
import store from "./store";

// 引入公共资源
import "./styles/reset.css";
import "./plugins/element.js";
import '../src/styles/iconfont.css'

// 引入mockSever，为了加载里面的代码
// 一但加载，就会启动mock服务器，从而拦截相应的请求
import "./mock/mockServer";

Vue.config.productionTip = false;
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  render: (h) => h(App),
  // 应用router
  router,
  store,
}).$mount("#app");
