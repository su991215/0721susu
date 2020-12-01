<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="carousel in carouselList"
        :key="carousel.id"
      >
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
 
<script>
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

Swiper.use([Navigation, Pagination, Autoplay]);

export default {
  name: "Carousel",
  props: {
    carouselList: {
      type: Array,
      required: true,
    },
  },

  watch: {
    carouselList() {
      if (this.swiper) return;

      this.$nextTick(() => {
        this.swiper = new Swiper(
          ".swiper-container",
          {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            autoplay: {
              delay: 100,
              disableOnInteraction: false,
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          },
          0
        );
      });
    },
  },
  mounted() {},
};
</script>

<style>
</style>