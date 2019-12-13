<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-12 19:42:57
 * @LastEditors: your name
 * @LastEditTime: 2019-12-13 15:47:48
 -->
<template>
  <body-block #module>
    <study-note-main :articleList="articleList" />
  </body-block>
</template>
<script>
import BodyBlock from "../../components/common/BodyBlock";
import StudyNoteMain from "../../components/studyNote/StudyNoteMain";
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
    StudyNoteMain
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
  }
};
</script>