// @ts-nocheck
import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import Search from "../views/Search";
import Detail from "../views/Detail";
import AddCartSuccess from "../views/AddCartSuccess";
import ShopCart from "../views/ShopCart";
import Trade from "../views/Trade";
import Pay from "../views/Pay";
import PaySuccess from "../views/PaySuccess";
import Center from "../views/Center";

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

const router = new VueRouter({
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
      path: "/center/myorder",
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

// 需要进行权限验证的地址
const permissionPaths = ["/trade", "/pay", "/center"];
// 路由全局前置守卫
router.beforeEach((to, from, next) => {
  /*
		to   要去的路由对象($route)
		from 从哪来的路由对象（当前路由对象）($route)
		next 是一个函数：跳转到哪个路由的方法
			比如：要去to这个路由 next()	
						要去登录路由 next('/login')  next({path: '/login'})  next({name: 'login'})
	
		
		权限验证：
			如果用户未登录，不允许去 trade pay center 等路由
  */
  console.log(from);
  if (permissionPaths.indexOf(to.path) > -1 && !store.state.user.token) {
    return next("/login");
  }
  next();
});
export default router;
