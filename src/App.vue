<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer v-if="!$route.meta.isFooterShow" />
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
