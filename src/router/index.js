import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import Search from "../views/Search";
import Detail from "../views/Detail";
import ShopCart from '../views/ShopCart'
import AddCartSuccess from '../views/AddCartSuccess'

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
      // 当组件加载显示时，meta中的参数会传到$route中
      // 当组件不加载显示时，meta中的参数不会传
      meta: {
        isFooterHide: true,
      },
    },
    {
      path: "/register",
      component: Register,
      meta: {
        isFooterHide: true,
      },
    },
    {
      // 命名路由
      name: "search",
      // ?: 代表 params 参数是可选的
      path: "/search/:searchText?",
      component: Search,
    },
    {
      // 命名路由
      name: "detail",
      // ?: 代表 params 参数是可选的
      path: "/detail/:id",
      component: Detail,
    },
    {
      // 命名路由
      name: "shopCart",
      // ?: 代表 params 参数是可选的
      path: "/shopCart",
      component: ShopCart,
    },
    {
      // 命名路由
      name: "addCartSuccess",
      // ?: 代表 params 参数是可选的
      path: "/addCartSuccess",
      component: AddCartSuccess,
    },
  ],
  scrollBehavior() {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 };
  },
});
