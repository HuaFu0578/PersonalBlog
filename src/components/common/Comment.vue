<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-08 21:45:42
 * @LastEditors: your name
 * @LastEditTime: 2019-12-09 14:59:10
 -->
<template>
  <div class="comment">
    <comment-list :commentList="commentList" />
  </div>
</template>
<script>
import CommentList from "./CommentList";
export default {
  data() {
    return {
      commentList: [
        {
            id:1,
          nickName: "Danker",
        //   replyee: "LiuHuaifu",
          content: "评论内容评论内容评论内容评论内容评论内容内容评论内容评论内内容评论内容评论内内容评论内容评论内内容评论内容评论内内容评论内容评论内内容评论内容评论内内容评论内容评论内内容评论内容评论内评论内容",
          date: "2019-12-9",
          avatar: require("@/assets/img/author.png")
        },
        {
            id:2,
          nickName: "Danker",
        //   replyee: "LiuHuaifu",
        //   content: "评论内容评论内容评论内容评论内容评论内容评论内容",
          date: "2019-12-9",
          avatar: require("@/assets/img/author.png")
        },
        {
            id:3,
          nickName: "Danker",
          replyee: "LiuHuaifu",
          content: "",
          date: "2019-12-9",
          avatar: require("@/assets/img/author.png")
        },
        {
            id:4,
          nickName: "sdfgfhjdhfdg",
          replyee: "JSON",
          content: "评论内容评论内容评论内容评论内容评论内容评论内容",
          date: "2019-12-9",
          avatar: require("@/assets/img/author.png")
        },
        {
            id:5,
          nickName: "Danker",
          replyee: "LiuHuaifu",
          content: "评论内容评论内容评论内容评论内容评论内容评论内容",
          date: "2019-12-9",
          avatar: require("@/assets/img/author.png")
        },
        {
            id:6,
          nickName: "Danker",
          replyee: "LiuHuaifu",
          content: "评论内容评论内容评论内容评论内容评论内容评论内容",
          date: "2019-12-9",
          avatar: require("@/assets/img/author.png")
        },
        {
            id:7,
          nickName: "Danker",
          replyee: "LiuHuaifu",
          content: "评论内容评论内容评论内容评论内容评论内容评论内容",
          date: "2019-12-9",
          avatar: require("@/assets/img/author.png")
        },
        {
            id:8,
          nickName: "Danker",
          replyee: "LiuHuaifu",
          content: "评论内容评论内容评论内容评论内容评论内容评论内容",
          date: "2019-12-9",
          avatar: require("@/assets/img/author.png")
        },
        {
            id:9,
          nickName: "Danker",
          replyee: "LiuHuaifu",
          content: "评论内容评论内容评论内容评论内容评论内容评论内容",
          date: "2019-12-9",
          avatar: require("@/assets/img/author.png")
        },
        {
            id:10,
          nickName: "Danker",
          replyee: "LiuHuaifu",
          content: "评论内容评论内容评论内容评论内容评论内容评论内容",
          date: "2019-12-9",
          avatar: require("@/assets/img/author.png")
        }
      ]
    };
  },
  components: {
    CommentList
  }
};
</script>
<style lang="scss" scoped>
.comment {
  width: 100%;
}
</style>