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
import Header from "@comps/Header";
import Footer from "@comps/Footer";
import { reqBaseCategoryList } from "@api/home";

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
  async mounted() {
    const result = await reqBaseCategoryList();
    console.log("result", result);
  },
};
</script>

<style lang='less' scoped>
</style>
