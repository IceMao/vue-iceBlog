<style lang="scss" scoped>
.edit {
    .editArtical {
        textarea,
        .preview {
            display: inline-block;
            width: 49%;
            height: 100%;
            vertical-align: top;
        }
        textarea {
            min-height: 700px;
            height: 100px;
            max-height: 500px;
            padding: 5px;
            box-sizing: border-box;
            resize: none;
            border-color: #eee;
        }
        textarea:focus {
            outline: none;
        }
        .preview {
            height: auto;
            max-height: 700px;
            margin-left: 8px;
            overflow: auto;
            background: #fcfaf2;
        }
    }
}
</style>
<template>
    <div class="edit">
        <ice-header></ice-header>
        找不到
        <ice-footer></ice-footer>
    </div>
</template>
<script>
import iceHeader from '../component/ice-header.vue';
import iceFooter from '../component/ice-footer.vue';
export default {
    data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                list: [{
                    name: "",
                    change: null
                }], //当change为false时 进行时中会多出一个“多余的事件”
                write: "",
            }

        },
        //组件注册
        components: {
            iceHeader,
            iceFooter,
        },
        //方法
        methods: {
            compile: function() {
                var text = document.getElementById("txt_ArticleContent").value;
                var converter = new showdown.Converter();
                //支持显示如同github的勾选框，默认false
                //ep: - [x] This task is done
                converter.setOption("tasklists", true);
                //支持显示table，默认false
                converter.setOption("tables", true);
                //支持图片大小设置，默认为false
                converter.setOption("parseImgDimensions", true);
                /**
                 **更多地请看https://github.com/showdownjs/showdown文档
                 **/
                var html = converter.makeHtml(text);
                console.info("make", html);
                document.getElementById("result").innerHTML = html;
            },

        },
        created() {

        },
}
</script>
