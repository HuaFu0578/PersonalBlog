<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-07 22:38:01
 * @LastEditors: your name
 * @LastEditTime: 2019-12-08 14:21:35
 -->
<template>
  <div class="main-section">
    <div class="slider">轮播图</div>
    <div class="last-article">
      <deadline-title head="最近更新">
        <article-list :articleList="articleList" />
      </deadline-title>
    </div>
  </div>
</template>
<script>
import DeadlineTitle from "./DeadlineTitle";
import ArticleList from "./ArticleList";
export default {
  data() {
    return {
      articleList: [
        {
          title: "文章标题1",
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575786838092&di=085ffbfe1fcad6066c265765ae1ee99d&imgtype=0&src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2015%2F0408%2F779334da99e40adb587d0ba715eca102.jpg",
          content:
            "阿萨德开了房监考老师大 打开疯狂 阿斯蒂芬会计法奥斯卡九分裤睡大觉焚枯食淡 开始打飞机 斯柯达复健科拉束带结发了卡戴珊解放路可接受的法兰克福免不了等方面阿SDK冷风机塑料袋咖啡机拉看束带结发克雷登斯荆防颗粒坚实的疯狂老板娘老师卡萨丁房间里看电视解放路看电视剧弗兰克日欧派膨润土的覆盖卡里古拉富可敌国圣诞快乐非建安独立思考等方面两方面算法 的酸辣粉快结束了开大加   阿市领导开房记录sad会计分录卡仕达解放路卡束带结发了看见没法拉盛",
          date: "2019-12-8",
          author: "Danker",
          tags: "javascript",
          introdution: "简介简介见阶简介简介奸恶简介简介简介奸恶你"
        },
        {
          title: "文章标题2",
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575786175519&di=4d7d2b86609fbeec55eabb9f39643b6e&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fexp%2Fw%3D500%2Fsign%3D432aef2ac35c1038247ecec28211931c%2Fd4628535e5dde7113a95acc6a2efce1b9d1661bf.jpg",
          content: "阿萨德开了房监考老师大 打开疯狂 阿斯蒂芬会计法",
          date: "2019-12-8",
          author: "Danker",
          tags: "javascript",
          introdution: "简介简介见阶简介简介奸恶简介简介简介奸恶你"
        },
        {
          title: "文章标题3",
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575786175519&di=4d7d2b86609fbeec55eabb9f39643b6e&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fexp%2Fw%3D500%2Fsign%3D432aef2ac35c1038247ecec28211931c%2Fd4628535e5dde7113a95acc6a2efce1b9d1661bf.jpg",
          content: "阿萨德开了房监考老师大 打开疯狂 阿斯蒂芬会计法",
          date: "2019-12-8",
          author: "Danker",
          tags: "javascript",
          introdution: "简介简介见阶简介简介奸恶简介简介简介奸恶你"
        },
        {
          title: "文章标题4",
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575786175519&di=4d7d2b86609fbeec55eabb9f39643b6e&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fexp%2Fw%3D500%2Fsign%3D432aef2ac35c1038247ecec28211931c%2Fd4628535e5dde7113a95acc6a2efce1b9d1661bf.jpg",
          content: "阿萨德开了房监考老师大 打开疯狂 阿斯蒂芬会计法",
          date: "2019-12-8",
          author: "Danker",
          tags: "javascript",
          introdution: "简介简介见阶简介简介奸恶简介简介简介奸恶你"
        },
        {
          title: "文章标题5",
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575786175519&di=4d7d2b86609fbeec55eabb9f39643b6e&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fexp%2Fw%3D500%2Fsign%3D432aef2ac35c1038247ecec28211931c%2Fd4628535e5dde7113a95acc6a2efce1b9d1661bf.jpg",
          content: "阿萨德开了房监考老师大 打开疯狂 阿斯蒂芬会计法",
          date: "2019-12-8",
          author: "Danker",
          tags: "javascript",
          introdution: "简介简介见阶简介简介奸恶简介简介简介奸恶你"
        },
        {
          title: "文章标题6",
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575786175519&di=4d7d2b86609fbeec55eabb9f39643b6e&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fexp%2Fw%3D500%2Fsign%3D432aef2ac35c1038247ecec28211931c%2Fd4628535e5dde7113a95acc6a2efce1b9d1661bf.jpg",
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
    DeadlineTitle,
    ArticleList
  }
};
</script>
<style lang="scss" scoped>
.main-section {
  width: 100%;

  .slider {
    width: 100%;
    height: 260px;
    background-color: #f40;
    margin-bottom: 20px;
  }

  .recommend {
    width: 100%;
    margin-bottom: 20px;
  }

  .last-article {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>