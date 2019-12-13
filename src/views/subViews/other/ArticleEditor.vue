<!--
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-09 17:48:58
 * @LastEditors: your name
 * @LastEditTime: 2019-12-12 15:31:38
 * tinymce参考：https://liubing.me/vue-tinymce-5.html
 -->

<template>
  <div class="daily-sentence">
    <p>
      <input type="text" placeholder="文章标题" v-model="article.title" />
    </p>
    <p>
      <input type="text" placeholder="文章作者" v-model="article.author" />
    </p>
    <p>
      <input type="text" placeholder="文章类型" v-model="article.type" />
    </p>
    <p>
      <input type="text" placeholder="文章标签" v-model="article.tags" />
    </p>
    <p>
      <input type="text" placeholder="文章关键词" v-model="article.keywords" />
    </p>
    <p>
      <input type="text" placeholder="文章摘要" v-model="article.abstract" />
    </p>
    <input type="radio ">//推荐，置顶，转载，原创
    <br />
    <ckeditor :editor="editor" v-model="article.content" :config="editorConfig"></ckeditor>
    <div>{{editorData}}</div>
    <button @click="submit">提交</button>
    <div>提示：{{msg}}</div>
  </div>

  <!-- <div> -->
  <!-- <froala :tag="'textarea'" :config="froalaConfig" v-model="froalaContent"></froala> -->

  <!-- <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor> -->
  <!-- <br>
  <br>-->
  <!-- <div>{{editorData}}</div> -->

  <!-- </div> -->

  <!-- 



  -->
  <!-- <div class="tinymce">
    <h1>tinymce</h1>
    <editor id="tinymce" v-model="tinymceHtml" :init="init"></editor>
    <div v-html="tinymceHtml"></div>
  </div>-->
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
      article: {
        title: "",
        author: "",
        type: "",
        tags: "",
        keywords: "",
        abstract: "",
        content: ""
      }
    };
  },
  computed: {
    ...mapGetters(["siteConfig"])
  },
  methods: {
    submit() {
      let url = this.siteConfig.addArticle;
      console.log(this.article);
      this.$axios
        .post(url, qs.stringify(this.article))
        .then(res => {
          this.msg = res.data.msg;
        });
    }
  }
};

// import VueFroala from "vue-froala-wysiwyg";

// export default {
//   name: "app",
//   data() {
//     return {
//       //More -> https://www.froala.com/wysiwyg-editor/docs/options
//       froalaConfig: {
//         toolbarButtons: [
//           "undo",
//           "redo",
//           "clearFormatting",
//           "|",
//           "bold",
//           "italic",
//           "underline",
//           "strikeThrough",
//           "|",
//           "fontFamily",
//           "fontSize",
//           "color",
//           "|",
//           "paragraphFormat",
//           "align",
//           "formatOL",
//           "formatUL",
//           "outdent",
//           "indent",
//           "quote",
//           "-",
//           "insertLink",
//           "insertImage",
//           "insertVideo",
//           "embedly",
//           "insertFile",
//           "insertTable",
//           "|",
//           "emoticons",
//           "specialCharacters",
//           "insertHR",
//           "selectAll",
//           "|",
//           "print",
//           "spellChecker",
//           "help",
//           "|",
//           "fullscreen"
//         ], //['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', 'inlineStyle', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-', 'insertLink', 'insertImage', 'insertVideo', 'embedly', 'insertFile', 'insertTable', '|', 'emoticons', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'print', 'spellChecker', 'help', 'html', '|', 'undo', 'redo'],//显示可操作项
//         // theme: "dark",//主题
//         placeholder: "请填写内容",
//         language: "zh_cn", //国际化
//         imageUploadURL: "http://i.froala.com/upload", //上传url
//         fileUploadURL: "http://i.froala.com/upload", //上传url 更多上传介绍 请访问https://www.froala.com/wysiwyg-editor/docs/options
//         quickInsertButtons: ["image", "table", "ul", "ol", "hr"], //快速插入项
//         // toolbarVisibleWithoutSelection: true,//是否开启 不选中模式
//         // disableRightClick: true,//是否屏蔽右击
//         colorsHEXInput: false, //关闭16进制色值
//         toolbarSticky: true, //操作栏是否自动吸顶
//         zIndex: 99999,
//         events: {
//           "froalaEditor.initialized": function() {
//             console.log("initialized");
//           }
//         }
//       },
//       froalaContent: "<p>www</p>" //默认测试文本
//     };
//   }
// };

////////////////////////////////////

// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// export default {
//   name: "app",
//   data() {
//     return {
//       editor: ClassicEditor,
//       editorData: "<p>Rich-text editor content.</p>",
//       editorConfig: {
//         // The configuration of the rich-text editor.
//       }
//     };
//   }
// };

//////////////////////////////////////////////////////

// import tinymce from "tinymce/tinymce";
// import Editor from "@tinymce/tinymce-vue";
// import "tinymce/themes/silver";
// import "tinymce/themes/mobile";
// import "tinymce/plugins/image"; // 插入上传图片插件
// import "tinymce/plugins/media"; // 插入视频插件
// import "tinymce/plugins/table"; // 插入表格插件
// import "tinymce/plugins/lists"; // 列表插件
// import "tinymce/plugins/wordcount"; // 字数统计插件
// import "/tinymce/plugins/link";
// import "/tinymce/plugins/code";
// import "/tinymce/plugins/contextmenu";
// import "/tinymce/plugins/colorpicker";
// import "/tinymce/plugins/textcolor";
// export default {
//   name: "tinymce",
//   data() {
//     return {
//       tinymceHtml: "请输入内容",
//       baseUrl: "",
//       //   init: {
//       //     language_url: `${this.baseUrl}/tinymce/langs/zh_CN.js`,
//       //     language: "zh_CN",
//       //     skin_url: `${this.baseUrl}/tinymce/skins/ui/oxide`,
//       //     content_css: `${this.baseUrl}/tinymce/skins/content/default/content.css`,
//       //     // skin_url: `${this.baseUrl}/tinymce/skins/ui/oxide-dark`, // 暗色系
//       //     // content_css: `${this.baseUrl}/tinymce/skins/content/dark/content.css`, // 暗色系
//       //     height: 300,
//       //     plugins: this.plugins,
//       //     toolbar: this.toolbar,
//       //     branding: false,
//       //     menubar: false,
//       //     // 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
//       //     // 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
//       //     images_upload_handler: (blobInfo, success, failure) => {
//       //       const img = "data:image/jpeg;base64," + blobInfo.base64();
//       //       success(img);
//       //     }
//       //   }
//         init: {
//           language_url: "/tinymce/langs/zh_CN.js",
//           language: "zh_CN",
//           skin_url: "/tinymce/skins/ui/oxide",
//           height: 300,
//           plugins:
//             "media table link lists image code table colorpicker textcolor wordcount contextmenu",
//           toolbar:
//             "bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat",
//           branding: false,
//           menubar: false,
//           images_upload_handler: (blobInfo, success, failure) => {
//             const img = "data:image/jpeg;base64," + blobInfo.base64();
//             success(img);
//           }
//         }

//     };
//   },
//   mounted() {
//     tinymce.init({});
//   },
//   components: { Editor }
// };
</script>
