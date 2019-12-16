<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-07 09:12:27
 * @LastEditors: your name
 * @LastEditTime: 2019-12-14 14:18:51
 -->
<template>
  <header class="header">
    <div class="head-wrap">
      <div class="logo">
        <router-link to="/">刘怀福个人博客</router-link>
      </div>
      <div class="everyday" v-html="dailySentence"></div>
    </div>
    <nav class="nav-bar" :class="{scrollfix:navFix}" v-fix>
      <div class="nav-wrap">
        <ul class="nav-menu">
          <router-link tag="li" to="/home" class="nav-item">首页</router-link>
          <router-link tag="li" :to="{name:'studyNote'}" class="nav-item">学习笔记</router-link>
          <router-link tag="li" :to="{name:'sourceCode'}" class="nav-item">源码学习</router-link>
          <router-link tag="li" :to="{name:'questionDiscuss'}" class="nav-item">问题探讨</router-link>
          <router-link tag="li" :to="{name:'liveRecord'}" class="nav-item">生活随记</router-link>
          <router-link tag="li" :to="{name:'about'}" class="nav-item">关于</router-link>
          <router-link tag="li" :to="{name:'msgBoard'}" class="nav-item">留言板</router-link>
        </ul>
        <div class="nav-search">
          <input type="text" placeholder="请输入关键字进行查找" v-model="navKeyWord" class="nav-keyword" />
          <router-link
            tag="div"
            :to="{name:'keywordClassify', query:{key_word:navKeyWord}}"
            class="btn-search"
          >搜索</router-link>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      navFix: false,
      dailySentence: "",
      navKeyWord: ""
    };
  },
  computed: {
    ...mapGetters(["siteConfig"])
  },
  created() {
    this.$axios.get(this.siteConfig.getDailySentence).then(res => {
      let data = res.data.data;
      if (data != null && data.length > 0) {
        this.dailySentence = data[0].content;
      }
    });
  },
  directives: {
    fix: {
      inserted(el, binding, vnode) {
        let offsetTop = el.offsetTop;
        window.addEventListener("scroll", e => {
          let scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop;
          let navFix = vnode.context.navFix;
          if (offsetTop <= scrollTop) {
            if (!navFix) vnode.context.navFix = true;
          } else {
            if (navFix) vnode.context.navFix = false;
          }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background-color: rgb(108, 217, 221);
  color: #fff;

  $wrap-width: 1170px; //带有*-wrap的都为1170px宽度

  //最顶端介绍区
  .head-wrap {
    $top-height: 80px; //最顶端logo和名言区高度

    width: $wrap-width;
    height: $top-height;
    margin: auto;
    display: flex;

    .logo {
      flex: 1;
      height: 100%;
      line-height: $top-height;
      padding-left: 5px;
      box-sizing: border-box;
      font-size: 36px;
      font-weight: 600;
      &:hover {
        color: rgb(227, 250, 127);
        cursor: pointer;
      }
    }
    .everyday {
      flex: 3;
      height: 100%;
      line-height: ($top-height - 16px)/3;
      text-align: justify;
      padding: 8px 20px 8px 8px;
      box-sizing: border-box;
      font-size: 18px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      align-items: center;
    }
  }
  //导航栏区
  .nav-bar {
    $nav-height: 50px; //导航栏高度
    $nav-gap: 30px; //导航菜单间隔

    width: 100%;
    background-color: rgb(238, 253, 198);

    .nav-wrap {
      width: $wrap-width;
      height: $nav-height;
      margin: auto;
      display: flex;
      align-items: center;

      //导航栏菜单区
      .nav-menu {
        flex: 4;
        height: 100%;
        line-height: $nav-height;
        color: #333;
        font-size: 22px;
        font-weight: 600;

        .nav-item {
          float: left;
          margin: 0 $nav-gap/2;
          padding: 0 8px;

          &.exact-active {
            background-color: #6cd9dd;
          }

          &:hover {
            color: #f00;
            cursor: pointer;
          }
        }
      }

      .nav-search {
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .nav-keyword {
          width: 70%;
          height: 25px;
          margin-right: 5px;
          padding: 5px;
          border-radius: 5px;
        }
        .btn-search {
          height: 35px;
          width: 35px;
          border-radius: 6px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgb(247, 100, 46);

          &:hover {
            background-color: rgb(248, 124, 78);
            cursor: pointer;
          }
        }
      }
    }

    &.scrollfix {
      //导航栏固定
      position: fixed;
      left: 0;
      top: 0;
      z-index: 1000;
    }
  }
}
</style>