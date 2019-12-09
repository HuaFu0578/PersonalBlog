<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-09 10:32:59
 * @LastEditors: your name
 * @LastEditTime: 2019-12-09 15:24:38
 -->
<template>
  <div class="send-comment">
    <div class="nick">
      昵称：
      <input type="text" placeholder="请输入您的昵称" />
    </div>
    <div class="reply" v-if="replyee">
      &nbsp;回复：
      <strong>{{replyee}}</strong>
    </div>

    <div class="avar">
      <span>头像：</span>
      <img src="~@/assets/img/lookup.png" alt="头像1" />
      <img src="~@/assets/img/lookup.png" alt="头像2" />
      <img src="~@/assets/img/lookup.png" alt="头像3" />
      <img src="~@/assets/img/lookup.png" alt="头像4" />
      <img src="~@/assets/img/lookup.png" alt="头像5" />
    </div>
    <div class="comment-content">
      <textarea class="text-area" name="comment_content" placeholder="我也来说两句..."></textarea>
    </div>
    <div class="oper">
      <div class="submit">{{replyee?'回复 TA':'提交评论'}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["replyee"]
};
</script>
<style lang="scss" scoped>
.send-comment {
  width: 100%;
  height:300px;
  padding: 20px 10px;
  box-sizing: border-box;
  background-color: rgb(245, 251, 253);
  border: 1px solid #ddd;
  box-shadow: inset -2px -3px 2px #777;

  .nick {
    display: inline-block;
    padding: 5px;
    height: 24px;
    line-height: 24px;

    input {
      height: 100%;
      border-radius: 5px;
    }
  }

  .reply {
    display: inline-block;
  }

  .avar {
    padding: 5px;
    display: flex;
    align-items: center;

    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      margin-right: 8px;
      border: 1px solid #aaa;
    }
  }

  .comment-content {
    width: 100%;
    padding: 15px 40px 15px 10px;
    box-sizing: border-box;

    .text-area {
      width: 100%;
      height: 100px;
      line-height: 1.5;
      letter-spacing: 1.5px;
      resize: none;
      padding: 5px;
    }
  }

  .oper {
    padding: 5px 50px 5px;
    display: flex;
    justify-content: flex-end;

    .submit {
      padding: 5px;
      border-radius: 5px;
      background-color: rgb(166, 227, 252);
      color: #333;
      cursor: pointer;

      &:hover {
        background-color: rgb(211, 243, 255);
      }
    }
  }
}
</style>