<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-07 22:38:01
 -->
<template>
  <div class="main-section">
    <!-- <div class="slider">
    </div> -->

  </div>
</template>
<script>
// import { swiper, swiperSlide } from "vue-awesome-swiper";
// import "swiper/dist/css/swiper.css";

import DeadlineTitle from "./DeadlineTitle";
import ArticleList from "./ArticleList";
export default {
  data() {
    return {
      imgIndex: 1,
      swiperOption: {
        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        //循环
        loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          /* 触摸滑动后是否继续轮播 */
          disableOnInteraction: false
        },
        //滑动速度
        speed: 800,
        //滑动方向
        direction: "horizontal",
        //小手掌抓取滑动
        grabCursor: true,
        on: {
          //滑动之后回调函数
          slideChangeTransitionStart: function() {
            /* realIndex为滚动到当前的slide索引值 */
            that.imgIndex = this.realIndex - 1;
          }
        },
        //分页器设置
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets"
        }
      }
    };
  },
  components: {
    DeadlineTitle,
    ArticleList,
    swiper,
    swiperSlide
  }
};
</script>
<style lang="scss" scoped>
.main-section {
  width: 100%;

  .slider {
    width: 100%;
    height: 260px;
    background-color: rgb(51, 255, 0);
    margin-bottom: 20px;
  }

  .recommend {
    width: 100%;
    margin-bottom: 20px;
  }

  .last-article {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>