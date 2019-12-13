<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-09 09:28:12
 * @LastEditors: your name
 * @LastEditTime: 2019-12-12 22:49:56
 -->
<template>
  <div class="com-list">
    <div class="com-item" v-for="comment in commentList" :key="comment.id">
      <div class="com-wrapper">
        <div class="avatar">
          <img :src="comment.avatar" :alt="comment.nickName" />
        </div>
        <div class="com-content">
          <div class="nick-name">
            <strong class="replyer">{{comment.nick_name}}</strong>
            <span v-if="comment.replyee">
              @
              <strong class="replyee">{{comment.replyee}}</strong>
            </span>
          </div>
          <div class="content">{{comment.content}}</div>
          <div class="date">{{comment.date}}</div>
          <div class="oper">
            <div class="reply mr-gap" @click="toggleCommentArea(comment)" title="回复ta的评论吧!">回复</div>|
            <div
              class="modify mr-gap"
              @click="modifyComment(comment)"
              :class="{authorized:isAuthorized(comment)}"
              :title="isAuthorized(comment)?'您可以修改此评论!':'对不起，您没有权限修改此评论!'"
            >修改</div>|
            <div
              class="delete mr-gap"
              @click="deleteComment(comment)"
              :class="{authorized:isAuthorized(comment)}"
              :title="isAuthorized(comment)?'您可以删除此评论!':'对不起，您没有权限删除此评论!'"
            >删除</div>
          </div>
        </div>
      </div>
      <send-comment
        class="appendix-box"
        v-if="whichBoxShow==comment.id"
        :replyee="comment.nick_name?comment.nick_name:''"
        :articleId="articleId"
      />
    </div>
    <div class="empty" v-if="curCommentCount == 0">呀~，空空如也，快来抢首评吧~</div>
    <send-comment v-show="notLastComment" :articleId="articleId" @click.native="commentBoxClick" />
  </div>
</template>
<script>
import SendComment from "./SendComment";
import { mapState } from "vuex";
export default {
  data() {
    return {
      whichBoxShow: -1
    };
  },
  computed: {
    ...mapState(["curCommentCount"]),
    notLastComment() {
      let comList = this.commentList;
      if (
        comList == null ||
        comList.length == 0 ||
        this.whichBoxShow != comList[comList.length - 1].id
      ) {
        return true;
      }
      return false;
    }
  },
  props: ["commentList", "articleId"],
  components: {
    SendComment
  },
  methods: {
    isAuthorized(comment) {
      //使用cookie判断是否授权
      return false;
    },
    //打开评论区
    toggleCommentArea(comment) {
      if (this.whichBoxShow == comment.id) this.whichBoxShow = -1;
      else this.whichBoxShow = comment.id;
    },
    modifyComment(comment) {
      return;
    },
    deleteComment(comment) {
      return;
    },
    commentBoxClick() {
      this.whichBoxShow = -1;
    }
  }
};
</script>
<style lang="scss" scoped>
.com-list {
  width: 100%;

  .com-item {
    width: 100%;

    .com-wrapper {
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      border-bottom: 1px solid #ddd;
      display: flex;
      align-items: stretch;

      .avatar {
        width: 50px;
        height: 50px;
        overflow: hidden;
        border-radius: 50%;
        border: 1px solid #ddd;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .com-content {
        flex: 1;
        margin-left: 10px;
        padding-right: 150px;
        position: relative;

        .nick-name {
          padding-bottom: 5px;

          .replyer {
            font-size: 18px;
          }

          .replyee {
            font-size: 14px;
          }
        }

        .content {
          text-indent: 2em;
        }

        .date {
          position: absolute;
          top: 0;
          right: 0;
          font-size: 18px;
          letter-spacing: 1px;
        }

        .oper {
          position: absolute;
          right: 0;
          bottom: 0;
          display: flex;

          .mr-gap {
            margin-right: 3px;
            color: #999;
          }

          .reply {
            cursor: pointer;

            &:hover {
              color: red;
            }
          }

          .modify,
          .delete {
            cursor: not-allowed;
            color: #e6e6e6;

            &.authorized {
              color: #999;
              &:hover {
                cursor: pointer;
                color: red;
              }
            }
          }
        }
      }
    }
  }

  .empty {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
}
</style>