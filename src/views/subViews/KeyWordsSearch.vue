<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-13 20:01:12
 * @LastEditors: your name
 * @LastEditTime: 2019-12-13 22:02:35
 -->
<template>
  <div class="keywords-show">
    <search-show head="关键词搜索结果" :resultCount="resultCount" :articleList="articleList" />
  </div>
</template>
<script>
import SearchShow from "../../components/common/SearchShow";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      articleList: [],
    };
  },
  computed: {
    ...mapGetters(["siteConfig"]),
    resultCount() {
      return this.articleList.length;
    }
  },
  components: {
    SearchShow
  },
  methods: {
    //通过标签id来获取文章列表
    getArticlesByKeyWords(key_word, success) {
      this.$axios
        .get(this.siteConfig.getArticleListByKeyWords, {
          params: { key_word: key_word, page: 1, pageSize: 10000 }
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
      let key_word = to.params.key_word || to.query.key_word;
      vm.getArticlesByKeyWords(key_word);
    });
  },
  beforeRouteUpdate(to, from, next) {
    let key_word = to.params.key_word || to.query.key_word;
    this.getArticlesByKeyWords(key_word);
    next();
  }
};
</script>
<style lang="scss" scoped>
.tag-show {
  width: 100%;
}
</style>