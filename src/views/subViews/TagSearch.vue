<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-13 15:19:45
 * @LastEditors: your name
 * @LastEditTime: 2019-12-13 20:05:31
 -->
<template>
  <div class="tag-show">
    <search-show head="标签搜索结果" :resultCount="resultCount" :articleList="articleList" />
  </div>
</template>
<script>
import SearchShow from "../../components/common/SearchShow";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      articleList: []
    };
  },
  computed: {
    ...mapGetters(["siteConfig"]),

    resultCount() {
      return this.$route.params.count || this.$route.query.count || 0;
    }
  },
  components: {
    SearchShow
  },
  methods: {
    //通过标签id来获取文章列表
    getArticlesByTagId(tag_id, success) {
      this.$axios
        .get(this.siteConfig.getArticleByTag, {
          params: { tag_id: parseInt(tag_id), page: 1, pageSize: 10000 }
        })
        .then(res => {
          let data = res.data.data;
          this.articleList = data;
          typeof success == "function" && success(res);
        });
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      let tag_id = to.params.tag_id || to.query.tag_id;
      vm.getArticlesByTagId(tag_id);
    });
  },
  beforeRouteUpdate(to, from, next) {
    let tag_id = to.params.tag_id || to.query.tag_id;
    this.getArticlesByTagId(tag_id);
    next();
  }
};
</script>
<style lang="scss" scoped>
.tag-show {
  width: 100%;
}
</style>