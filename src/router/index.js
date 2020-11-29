import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import Search from "../views/Search";

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
