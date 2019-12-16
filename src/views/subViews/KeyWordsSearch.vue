<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-13 20:01:12
 * @LastEditors: your name
 * @LastEditTime: 2019-12-16 10:49:27
 -->
<template>
  <div class="keywords-show">
    <search-show head="关键词搜索结果" :api="api" />
  </div>
</template>
<script>
import SearchShow from "../../components/common/SearchShow";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["siteConfig"]),
    api() {
      return {
        getArticle: this.siteConfig.getArticleListByKeyWords,
        getArticleCount: this.siteConfig.getArticleCountByKeyWords,
        params: {
          getArticle: {
            key_word: this.$route.params.key_word || this.$route.query.key_word
          },
          getArticleCount: {
            key_word: this.$route.params.key_word || this.$route.query.key_word
          }
        }
      };
    }
  },
  components: {
    SearchShow
  }
};
</script>
<style lang="scss" scoped>
.tag-show {
  width: 100%;
}
</style>