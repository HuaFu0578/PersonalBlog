<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-07 19:01:03
 * @LastEditors: your name
 * @LastEditTime: 2019-12-13 16:23:12
 -->
<template>
  <aside>
    <aside-module #module head="标签云">
      <tag-list-module :tagList="tagList" />
    </aside-module>
    <aside-module #module head="特别推荐">
      <range-module :titleList="recommendList" />
    </aside-module>
    <aside-module #module head="最热文章">
      <range-module :titleList="hotArtList" />
    </aside-module>
  </aside>
</template>
<script>
import AsideModule from "./AsideModule";
import RangeModule from "../RangeModule";
import TagListModule from "../tags/TagListModule";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      hotArtList: [],
      tagList: [],
      recommendList: []
    };
  },
  computed: {
    ...mapGetters(["siteConfig"])
  },
  components: {
    AsideModule,
    RangeModule,
    TagListModule
  },
  created() {
    this.getTags()
      .getRecommend()
      .getHotArticle();
  },
  methods: {
    getTags() {
      this.$axios.get(this.siteConfig.getTags).then(res => {
        let data = res.data.data;
        let tempArr = [];
        data.forEach(item => {
          tempArr.push({
            tag: item.tag,
            to: {
              name: "tagClassify",
              params: { count: item.count },
              query: { tag_id: item.id, tag_name: item.tag }
            },
            count: item.count
          });
          this.tagList = tempArr;
        });
      });
      return this;
    },
    getRecommend() {
      this.$axios
        .get(this.siteConfig.getRecommendArticle, {
          params: { page: 1, pageSize: 10 }
        })
        .then(res => {
          let data = res.data.data;
          this.recommendList = data;
        });
      return this;
    },
    getHotArticle() {
      this.$axios
        .get(this.siteConfig.getHotArticle, {
          params: { page: 1, pageSize: 10 }
        })
        .then(res => {
          let data = res.data.data;
          this.hotArtList = data;
        });
      return this;
    }
  }
};
</script>