<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-13 15:19:45
 * @LastEditors: your name
 * @LastEditTime: 2019-12-16 12:54:03
 -->
<template>
  <div class="tag-show">
    <search-show head="标签搜索结果" :api="api" />
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
        getArticle: this.siteConfig.getArticleByTag,
        getArticleCount: this.siteConfig.getArticleCountByTag,
        params: {
          getArticle: {
            tag_id: this.$route.params.tag_id || this.$route.query.tag_id
          },
          getArticleCount: {
            tag_id: this.$route.params.tag_id || this.$route.query.tag_id
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