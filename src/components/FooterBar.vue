<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-07 08:56:27
 * @LastEditors: your name
 * @LastEditTime: 2019-12-07 19:08:40
 -->
<template>
  <footer class="footer">
    <div class="footer-wrap">
      <p>
        Copyright ©
        <a href="https://hfullest.com" target="_blank" class="copyright">hfullest.com</a>
        {{copyRight_year}} All Rights Reserved. 备案号:
        <a href="http://www.beian.miit.gov.cn/" target="_blank" class="copyright">湘ICP备19016099号</a>
      </p>
      <p>
        基于
        <a href="https://cn.vuejs.org/" target="_blank" class="copyright">Vue全家桶</a>+
        <a href="https://nodejs.org/zh-cn/" target="_blank" class="copyright">Nodejs</a> · Designed By Danker
      </p>
    </div>
  </footer>
</template>
<script>
export default {
  computed: {
    copyRight_year() {
      let curYear = new Date().getFullYear();
      return curYear > 2019 ? `2019-${curYear}` : `2019`;
    }
  }
};
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  background-color: #373737;

  .footer-wrap {
    width: 1170px;
    padding: 20px 10px;
    margin: auto;
    color: #888;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .copyright:hover {
      color: rgb(166, 236, 74);
    }
  }
}
</style>