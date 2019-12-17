<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-07 22:38:01
 -->
<template>
  <div class="main-section">
    <!-- <div class="slider">
      <swiper :options="swiperOption" class="swiper-wrap" ref="mySwiper" v-if="banner.length!=0">
        <swiper-slide v-for="(item,index) in banner" :key="index">
          <img :src="item.imgUrl" alt class="swiper-show" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div> -->
    <div class="last-article">
      <deadline-title head="最近更新" #module>
        <article-list
          :api="{getArticle:siteConfig.getArticle,getArticleCount:siteConfig.getArticleCount}"
        />
      </deadline-title>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import DeadlineTitle from "../../components/common/DeadlineTitle";
import ArticleList from "../../components/common/article/ArticleList";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      banner: [
        {
          id: "001",
          imgUrl: "https://cn.vuejs.org/images/lifecycle.png"
        },
        {
          id: "002",
          imgUrl:
            "http://www.zhangjinpeng.com.cn/wp-content/uploads/2015051601.jpg"
        },
        {
          id: "003",
          imgUrl:
            "http://d.hiphotos.baidu.com/exp/w=500/sign=912c790983d4b31cf03c94bbb7d7276f/42166d224f4a20a49de25e8d98529822730ed0f8.jpg"
        }
      ],
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
        //分页器设置
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets"
        }
      }
    };
  },
  computed: {
    ...mapGetters(["siteConfig"])
  },
  components: {
    DeadlineTitle,
    ArticleList
  }
};
</script>
<style lang="scss" scoped>
.main-section {
  width: 100%;

  .slider {
    width: 500px;
    height: 300px;
    margin-bottom: 20px;

    .swiper-show {
      width: 500px;
      height: 300px;
    }
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