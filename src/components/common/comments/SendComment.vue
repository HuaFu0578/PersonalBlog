<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-09 10:32:59
 * @LastEditors: your name
 * @LastEditTime: 2019-12-12 22:58:26
 -->
<template>
  <div class="send-comment">
    <div class="nick">
      昵称：
      <input type="text" v-model="nick_name" placeholder="请输入您的昵称" :class="{tips:nickEmpty && !nick_name}" />
    </div>
    <div class="reply" v-if="replyee">
      &nbsp;回复：
      <strong>{{replyee}}</strong>
    </div>
    <div class="avar">
      <span>头像：</span>
      <img
        :src="avatar"
        :alt="'头像'+index"
        v-for="(avatar,index) in avatarList"
        :key="index"
        @click="chooseAvatar(avatar,index)"
        :class="{choosed:choosed==index}"
      />
    </div>
    <div class="comment-content">
      <textarea
        class="text-area"
        :class="{tips:contentEmpty && !content}"
        name="comment_content"
        v-model="content"
        placeholder="我也来说两句..."
      ></textarea>
    </div>
    <div class="oper">
      <div class="submit" @click="submit">{{replyee?'回复 TA':'提交评论'}}</div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import qs from "qs";
export default {
  data() {
    return {
      nickEmpty: false,
      contentEmpty: false,
      content: "",
      nick_name: "",
      avatarList: [],
      choosed: -1,
      avatar: ""
    };
  },
  computed: {
    comment() {
      return {
        nick_name: this.nick_name,
        avatar: this.avatar,
        replyee: this.replyee || "",
        content: this.content,
        article_id: this.articleId
      };
    },
    ...mapState(["host"]),
    ...mapGetters(["siteConfig"])
  },
  props: ["replyee", "articleId"],
  created() {
    this.$axios
      .get(this.siteConfig.getCommentRandomAvatar, { params: { num: 10 } })
      .then(res => {
        let data = res.data.data;
        this.avatarList = data.map(ava => this.host + ava);
      });
  },
  methods: {
    submit() {
      if (!this.nick_name || !this.content) {
        if (!this.nick_name) this.nickEmpty = true;
        if (!this.content) this.contentEmpty = true;
        return;
      }

      this.$axios
        .post(this.siteConfig.addComment, qs.stringify(this.comment))
        .then(_ => {
          this.content = this.nick_name = this.avatar = "";
          this.choosed = -1;
          this.contentEmpty = this.nickEmpty = false;
          this.$axios
            .get(this.siteConfig.getComment, {
              params: { article_id: this.articleId, page: 1, pageSize: 10 }
            })
            .then(res => {
              this.$store.commit("updateCurComment", res.data.data);
            });
          this.$axios
            .get(this.siteConfig.getCommentCount, {
              params: { article_id: this.articleId }
            })
            .then(res => {
              this.$store.commit(
                "updateCurCommentCount",
                res.data.data[0].count
              );
            });
        });
    },
    chooseAvatar(avatar, index) {
      this.avatar = avatar;
      this.choosed = index;
    }
  }
};
</script>
<style lang="scss" scoped>
.send-comment {
  width: 100%;
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
      border: 1px solid #666;
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
      width: 36px;
      height: 36px;
      border-radius: 50%;
      margin-right: 8px;
      border: 1px solid #ccc;
      cursor: pointer;

      &.choosed {
        border: 2px solid red;
      }
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
      letter-spacing: 1.2px;
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
  .tips {
    border: 1px solid red !important;
  }
}
</style>