import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import Search from "../views/Search";
import Detail from "../views/Detail";
import ShopCart from '../views/ShopCart'
import AddCartSuccess from '../views/AddCartSuccess'
import Pay from '../views/Pay'
import PaySuccess from '../views/PaySuccess'
import Center from '../views/Center'
import Trade from '../views/Trade'


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
      name: "shopcart",
      // ?: 代表 params 参数是可选的
      path: "/shopcart",
      component: ShopCart,
    },
    {
      // 命名路由
      name: "addcartsuccess",
      // ?: 代表 params 参数是可选的
      path: "/addcartsuccess",
      component: AddCartSuccess,
    },
    {
      // 命名路由
      name: "pay",
      // ?: 代表 params 参数是可选的
      path: "/pay",
      component: Pay,
    },
    {
      // 命名路由
      name: "paysuccess",
      // ?: 代表 params 参数是可选的
      path: "/paysuccess",
      component: PaySuccess,
    },
    {
      // 命名路由
      name: "center",
      // ?: 代表 params 参数是可选的
      path: "/center",
      component: Center,
    },
    {
      // 命名路由
      name: "trade",
      // ?: 代表 params 参数是可选的
      path: "/trade",
      component: Trade,
    },
  ],
  scrollBehavior() {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 };
  },
});
