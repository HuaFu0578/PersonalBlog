<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-08 11:08:20
 * @LastEditors: your name
 * @LastEditTime: 2019-12-16 12:53:09
 -->
<template>
  <div>
    <article-item
      class="art-item"
      :article="article"
      v-for="(article,index) in articleList"
      :key="index"
    />
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :background="true"
        :current-page="1"
        :page-sizes="[5, 10, 20, 50]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="articleCount||0"
        :hide-on-single-page="articleCount<=50 && articleCount>=10?false:true"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import ArticleItem from "./ArticleItem";
export default {
  data() {
    return {
      page: 1,
      pageSize: 10,
      articleList: [],
      articleCount: 0
    };
  },
  watch: {
    api: {
      handler(val, oldVal) {
        if (val != oldVal) this.getArticle().getArticleCount();
      },
      deep: true
    }
  },
  props: ["api"],
  components: {
    ArticleItem
  },
  created() {
    this.getArticle().getArticleCount();
  },
  methods: {
    getArticle(page, pageSize) {
      this.$axios
        .get(this.api.getArticle, {
          params: Object.assign(
            {},
            {
              page: page || this.page,
              pageSize: pageSize || this.pageSize
            },
            (this.api.params && this.api.params.getArticle) || {}
          )
        })
        .then(res => {
          let data = res.data.data;
          this.articleList = data;
        });
      return this;
    },
    getArticleCount() {
      if (this.api.localCount != null) return this; //如果已经取得值，则不再进行网络请求
      this.$axios
        .get(this.api.getArticleCount, {
          params: (this.api.params && this.api.params.getArticleCount) || {}
        })
        .then(res => {
          let data = res.data.data;
          if (data == null || data.length == 0) return this;
          this.articleCount = data[0].count;
          this.setLocalCount();
        });
      return this;
    },
    //向父级设置文章总数
    setLocalCount() {
      this.$emit("localCount", this.articleCount);
      return this;
    },
    handleSizeChange(val) {
      //pageSize
      this.pageSize = val;
      this.getArticle().getArticleCount();
    },
    handleCurrentChange(val) {
      //page
      this.page = val;
      this.getArticle().getArticleCount();
    }
  },
  beforeRouteUpdate() {
    console.log("更新", this.api, arguments);
  }
};
</script>
<style lang="scss" scoped>
.art-item {
  padding: 10px 10px 20px;
  margin-bottom: 15px;
  box-sizing: border-box;
  height: 230px;
}
.pagination {
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>