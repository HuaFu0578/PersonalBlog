<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-07 17:03:51
 * @LastEditors: your name
 * @LastEditTime: 2019-12-08 20:57:45
 -->
<template>
  <div class="source-code">
    <div class="main">
      <body-block #module>
        <source-code-main :articleList="articleList" />
      </body-block>
    </div>
  </div>
</template>
<script>
import BodyBlock from "../components/BodyBlock";
import SourceCodeMain from "../components/sourceCode/SourceCodeMain";
export default {
  data() {
    return {
      articleList: [
        {
          title: "文章标题1",
          img: "~@/assets/img/兄弟们有人闹事.gif",
          content:
            "阿萨德开了房监考老师大 打开疯狂 阿斯蒂芬会计法奥斯卡九分裤睡大觉焚枯食淡 开始打飞机 斯柯达复健科拉束带结发了卡戴珊解放路可接受的法兰克福免不了等方面阿SDK冷风机塑料袋咖啡机拉看束带结发克雷登斯荆防颗粒坚实的疯狂老板娘老师卡萨丁房间里看电视解放路看电视剧弗兰克日欧派膨润土的覆盖卡里古拉富可敌国圣诞快乐非建安独立思考等方面两方面算法 的酸辣粉快结束了开大加   阿市领导开房记录sad会计分录卡仕达解放路卡束带结发了看见没法拉盛",
          date: "2019-12-8",
          author: "Danker",
          tags: "javascript",
          introdution: "简介简介见阶简介简介奸恶简介简介简介奸恶你"
        },
        {
          title: "文章标题2",
          img: "~@/assets/img/兄弟们有人闹事.gif",
          content: "阿萨德开了房监考老师大 打开疯狂 阿斯蒂芬会计法",
          date: "2019-12-8",
          author: "Danker",
          tags: "javascript",
          introdution: "简介简介见阶简介简介奸恶简介简介简介奸恶你"
        },
        {
          title: "文章标题3",
          img: "~@/assets/img/兄弟们有人闹事.gif",
          content: "阿萨德开了房监考老师大 打开疯狂 阿斯蒂芬会计法",
          date: "2019-12-8",
          author: "Danker",
          tags: "javascript",
          introdution: "简介简介见阶简介简介奸恶简介简介简介奸恶你"
        },
        {
          title: "文章标题4",
          img: "~@/assets/img/兄弟们有人闹事.gif",
          content: "阿萨德开了房监考老师大 打开疯狂 阿斯蒂芬会计法",
          date: "2019-12-8",
          author: "Danker",
          tags: "javascript",
          introdution: "简介简介见阶简介简介奸恶简介简介简介奸恶你"
        },
        {
          title: "文章标题5",
          img: "~@/assets/img/兄弟们有人闹事.gif",
          content: "阿萨德开了房监考老师大 打开疯狂 阿斯蒂芬会计法",
          date: "2019-12-8",
          author: "Danker",
          tags: "javascript",
          introdution: "简介简介见阶简介简介奸恶简介简介简介奸恶你"
        },
        {
          title: "文章标题6",
          img: "~@/assets/img/兄弟们有人闹事.gif",
          content: "阿萨德开了房监考老师大 打开疯狂 阿斯蒂芬会计法",
          date: "2019-12-8",
          author: "Danker",
          tags: "javascript",
          introdution: "简介简介见阶简介简介奸恶简介简介简介奸恶你"
        }
      ]
    };
  },
  components: {
    BodyBlock,
    SourceCodeMain
  }
};
</script>
<style lang="scss" scoped>
.source-code {
  width: 100%;
}
</style>