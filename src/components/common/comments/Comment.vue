<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-08 21:45:42
 * @LastEditors: your name
 * @LastEditTime: 2019-12-12 20:40:55
 -->
<template>
  <div class="comment">
    <comment-list :commentList="commentList" :articleId="articleId"/>
  </div>
</template>
<script>
import CommentList from "./CommentList";
export default {
  props: ["commentList","articleId"],
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