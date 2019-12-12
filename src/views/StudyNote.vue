<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-07 15:43:55
 * @LastEditors: your name
 * @LastEditTime: 2019-12-12 17:19:05
 -->
<template>
  <div class="study-note">
    <div class="main">
      <body-block #module>
        <study-main :articleList="articleList" :readArticle="readArticle" />
        <!-- <router-view ></router-view> -->
      </body-block>
    </div>
  </div>
</template>
<script>
import BodyBlock from "../components/BodyBlock";
import StudyMain from "../components/studyNote/StudyMain";
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
  components: {
    BodyBlock,
    StudyMain
  },
  created() {
    this.$axios
      .get(this.siteConfig.getArticleByType, {
        params: { type: "学习笔记", page: 1, pageSize: 10 }
      })
      .then(res => {
        let data = res.data.data;
        this.articleList = data;
      });
  },
  methods: {
    readArticle(article) {
      this.$store.commit("changeCurModule", "学习笔记");
      this.$store.commit("setCurArticle", article);
    }
  }
};
</script>
<style lang="scss" scoped>
.study-note {
  width: 100%;
}
</style>