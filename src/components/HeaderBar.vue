<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-07 09:12:27
 * @LastEditors: your name
 * @LastEditTime: 2019-12-07 22:22:40
 -->
<template>
  <header class="header">
    <div class="head-wrap">
      <div class="logo">
        <router-link to="/">刘怀福个人博客</router-link>
      </div>
      <div class="everyday" v-html="eyDayWord"></div>
    </div>
    <nav class="nav-bar" :class="{scrollfix:navFix}" v-fix>
      <div class="nav-wrap">
        <ul class="nav-menu">
          <router-link tag="li" to="/home" class="nav-item">首页</router-link>
          <router-link tag="li" :to="{name:'studyNote'}" class="nav-item">学习笔记</router-link>
          <router-link tag="li" :to="{name:'sourceCode'}" class="nav-item">源码学习</router-link>
          <router-link tag="li" :to="{name:'qesDiscuss'}" class="nav-item">问题探讨</router-link>
          <router-link tag="li" :to="{name:'about'}" class="nav-item">关于</router-link>
          <router-link tag="li" :to="{name:'msgBoard'}" class="nav-item">留言板</router-link>
          <router-link tag="li" :to="{name:'studyNote'}" class="nav-item">其他</router-link>
        </ul>
        <div class="nav-search">
          <input type="text" placeholder="请输入关键字进行查找" v-model="navKeyWord" class="nav-keyword" />
          <button class="btn-search">搜索</button>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      navFix: false,
      eyDayWord:
        "<p>骐骥一跃，不能十步；驽马十驾，功在不舍；锲而舍之，朽木不折；锲而不舍，金石可镂。</p><p>——荀况</p>",
      navKeyWord: ""
    };
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
    $nav-gap: 50px; //导航菜单间隔

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
        font-size: 20px;

        .nav-item {
          float: left;
          margin: 0 $nav-gap/2;

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
          border: none;
          outline: none;
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