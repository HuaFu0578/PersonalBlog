<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-13 11:10:57
 * @LastEditors: your name
 * @LastEditTime: 2019-12-13 15:48:38
 -->
<template>
  <body-block #module class="home-page-main">
    <home-main :articleList="articleList" />
  </body-block>
</template>
<script>
import BodyBlock from "../../components/common/BodyBlock";
import HomeMain from "../../components/home/HomeMain";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      articleList: []
    };
  },
  computed: {
    ...mapGetters(["siteConfig"])
  },
  created() {
    this.$axios
      .get(this.siteConfig.getArticle, { params: { page: 1, pageSize: 10 } })
      .then(res => {
        let data = res.data.data;
        this.articleList = data;
      });
  },
  components: {
    BodyBlock,
    HomeMain
  }
};
</script>