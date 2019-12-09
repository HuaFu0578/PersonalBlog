<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-07 19:01:03
 * @LastEditors: your name
 * @LastEditTime: 2019-12-09 15:32:58
 -->
<template>
  <aside>
    <aside-module #module head="标签云">
      <tag-list-module :tagList="tagList" />
    </aside-module>
    <aside-module #module head="特别推荐">
      <range-module :titleList="newArtList" />
    </aside-module>
    <aside-module #module head="最热文章">
      <range-module :titleList="hotArtList" />
    </aside-module>
  </aside>
</template>
<script>
import AsideModule from "./AsideModule";
import RangeModule from "./RangeModule";
import TagListModule from "./TagListModule";
export default {
  data() {
    return {
      newArtList: [
        "JavaScript数据结构和算法（二）",
        "JavaScript数据结构和算法（二）",
        "JavaScript数据结构和算法（二）",
        "JavaScript数据结构和算法（二）",
        "JavaScript数据结构和算法（二）",
        "JavaScript数据结构和算法（二）",
        "JavaScript数据结构和算法（二）",
        "JavaScript数据结构和算法（二）",
        "JavaScript数据结构和算法（二）",
        "JavaScript数据结构和算法（二）"
      ],
      hotArtList: [
        "JavaScript数据结构和算法（二）地方撒打发阿斯蒂芬是苏打粉",
        "JavaScript数据结构和算法（二）",
        "JavaScript数据结构和算法（二）",
        "JavaScript数据结构和算法（二）",
        "JavaScript数据结构和算法（二）",
        "JavaScript数据结构和算法（二）",
        "JavaScript数据结构和算法（二）",
        "JavaScript数据结构和算法（二）",
        "JavaScript数据结构和算法（二）",
        "JavaScript数据结构和算法（二）"
      ],
      tagList: [
        { tag: "JavaScript", to: "/" },
        { tag: "CSS3", to: "/" },
        { tag: "HTML5", to: "/" },
        { tag: "JavaScript", to: "/" },
        { tag: "sdfasdf", to: "/" },
        { tag: "JavaScript", to: "/" },
        { tag: "CSS3", to: "/" },
        { tag: "fasdfasdfasdfh", to: "/" },
        { tag: "JavaScript", to: "/" },
        { tag: "CSS3", to: "/" },
        { tag: "HTML5", to: "/" }
      ]
    };
  },
  components: {
    AsideModule,
    RangeModule,
    TagListModule
  }
};
</script>