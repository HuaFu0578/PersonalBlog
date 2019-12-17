<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-07 17:09:48
 -->
<template>
  <div class="about">
    <header-bar />
    <div class="main">
      <body-block #module>
        <div class="bg">
          <div class="content">
            <div class="intro">
              <h2>博主介绍</h2>
              <div class="intro-detail">
                <p>
                  <strong>姓名：</strong>刘怀福
                </p>
                <p>
                  <strong>爱好：</strong>编程，下棋，听音乐，打乒乓球。
                </p>
              </div>
            </div>
            <h3>内心独白</h3>
            <p
              class="monologue"
            >我叫刘怀福，一名95后的技术热爱者。在大学里就喜欢倒腾程序代码，曾用C#和MATLAB编写过一些小程序，比如物理实验数据线性拟合的小程序以及其它物理实验的数据分析程序等等，由此得来的满足感使我深深的喜欢上了编程。毕业后，我选择了非常有前景的前端行业，同时也因为前端能够将所想变成所得，非常有成就感。俗话说，兴趣是最好的老师，当遇到问题时，会想尽千方百计去找论坛查资料解决它，如果问题十分棘手，我经常会从问题产生的由来追根溯源从原理上解决，往往取得了不错的效果。目前正在潜心研究前端技术，我希望将自己的所想所得以博客形式记录下来，与大家共同探讨共同进步，请大家多多关照！</p>
            <h3 class="spe-head">特别声明</h3>
            <p
              class="special-announce"
            >由于本站未使用任何模板，仅仅参考了优秀站点的排版，可能站点的界面设计还不够优美，但是基本功能已实现，接下来一段时间将会不断完善本博客内容和界面美化，谢谢大家的理解与支持！</p>
          </div>
        </div>
      </body-block>
    </div>
    <footer-bar />
  </div>
</template>
<script>
import HeaderBar from "../components/common/HeaderBar";
import BodyBlock from "../components/common/BodyBlock";
import FooterBar from "../components/common/FooterBar";
export default {
  components: {
    BodyBlock,
    HeaderBar,
    FooterBar
  }
};
</script>
<style lang="scss" scoped>
.about {
  width: 100%;
}
.main {
  width: 1170px;
  margin: 20px auto;

  .content {
    background-color: rgba(255, 255, 255, 0.9);
    padding: 10px;
    font-size: 20px;
    letter-spacing: 1px;
    background-image: url("~@/assets/img/bg2.jpeg");
    background-position: center center;
    background-size: 100% 100%;
    background-repeat: no-repeat;

    h3 {
      padding: 20px 0 10px;
    }
    .intro {
      .intro-detail {
        opacity: 1;
        text-indent: 2em;
      }
    }

    .monologue {
      text-indent: 2em;
    }

    .special-announce {
      font-family: "华文行楷";
      text-indent: 2em;
      font-weight: 600;
      font-size: 22px;
    }
  }
}
</style>