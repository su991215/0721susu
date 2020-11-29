<template>
  <div>
    <Header />
    <router-view></router-view>
    <!-- 当不上登录或者是注册时候，就显示 -->
    <!-- <Footer v-if="!$route.path.isFooterShow" /> -->
    <Footer v-if="$route.path !== '/login' && $route.path !== '/register'" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  // data() {
  //   return {
  //     isFooterShow: true,
  //   };
  // },
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang='less' scoped>
</style>
