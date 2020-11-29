import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import Search from "../views/Search";

const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;

// 重写了push和replace方法，
// 目的是为了不让导航点击时报错
VueRouter.prototype.push = function(location, onComplete, onAbort) {
  // 用户想处理失败就处理
  if (onComplete && onAbort) {
    return push.call(this, location, onComplete, onAbort);
  }
  // 想处理就空行
  return push.call(this, location, onComplete, () => {});
};
VueRouter.prototype.replace = function(location, onComplete, onAbort) {
  // 用户想处理失败就处理
  if (onComplete && onAbort) {
    return replace.call(this, location, onComplete, onAbort);
  }
  // 想处理就空行
  return replace.call(this, location, onComplete, () => {});
};

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register",
      component: Register,
      ifFooterShow: true,
    },
    {
      // ?代表可以有值可以没值
      path: "/search/:searchText?",
      component: Search,
    },
  ],
});
