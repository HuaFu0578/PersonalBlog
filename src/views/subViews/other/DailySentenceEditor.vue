<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-10 09:11:07
 * @LastEditors: your name
 * @LastEditTime: 2019-12-11 08:30:40
 -->
<template>
  <div class="daily-sentence">

    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    <div>{{editorData}}</div>
    <button @click="submit">提交</button>
    <div>提示：{{msg}}</div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import qs from "qs";
export default {
  name: "dailySentenceEditor",
  data() {
    return {
      editor: ClassicEditor,
      editorData: "<p>Rich-text editor content.</p>",
      editorConfig: {
        // The configuration of the rich-text editor.
      },
      msg: "",
    };
  },
  computed: {
    ...mapGetters(["siteConfig"])
  },
  methods: {
    submit() {
      let url = this.siteConfig.addDailySentence;
      this.$axios
        .post(url, qs.stringify({ content: this.editorData }))
        .then(res => {
          this.msg = res.data.msg;
        });
    }
  }
};
</script>