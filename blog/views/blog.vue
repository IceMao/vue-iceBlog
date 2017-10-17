<style scoped>
@import './../assets/common/blog.css';
/*input[type="checkbox"] + label:before {
    content: "\a0";
    display: inline-block;
    vertical-align: .2em;
    width: .8em;
    height: .8em;
    margin-right: .2em;
    border-radius: .2em;
    background: silver;
    text-indent: .15em;
    line-height: .65;
}*/

input[type="checkbox"] + label {
    display: inline-block;
    padding:.3em .5em;
    background: #ccc;
    background-image:linear-gradient(#ddd, #bbb);
    border:1px solid rgba(0,0,0,0.2);
    border-radius: .3em;
    box-shadow: 0 1px white inset;
    text-align: center;
    text-shadow:0 1px 1px #fff;

}
input[type="checkbox"]:checked + label,
input[type="checkbox"]:active + label {
 box-shadow: .05em .1em .2em rgba(0,0,0,.6) inset;
 border-color: rgba(0,0,0,.3);
 background: #bbb;
}

input[type="checkbox"]:checked + label:before {
    content: '\2713';
    background: yellowgreen;
}

input[type="checkbox"] {
    position: absolute;
    clip: rect(0, 0, 0, 0);
}

input[type="checkbox"]:focus + label::before {
    box-shadow: 0 0 .1em .1em #3ae;
}

input[type="checkbox"]:disabled + label::before {
    background: gray;
    box-shadow: none;
    color: #555;
}
</style>
<template>
    <div class="blog">
        <ice-header></ice-header>
        <!-- <input type="checkbox" id="aw" disabled>
        <label for="aw">Awesome!</label> -->
        <!--正文-->
        <section class="noteList container">
            <section class="noteItem" :for="item in artList">
                <h4><a :href="'/#/article/'+item.ArticleID">{{item.Title}}</a></h4>
                <p>posted @ {{item.UpdateTime}} IceMao</p>
                <p>{{item.ArticleContent}}</p>
            </section>
            <section class="noteItem">
                <h4><a href="">angular2666：关于ng-repeat和ng-options</a></h4>
                <p>posted @ 2016-09-10 09:08 IceMao</p>
                <p>二者都可用于实现下拉列表，并且度娘上有很多关于两者的内容，此处不再赘述，本文为了说明在最近的项目中遇到的相关问题， 可以写成如下格式 ng repeat ng options 区别： 1. 如上所示，当在select中时ng repeat需要写在option中，而ng options不需要optio</p>
            </section>
        </section>
        <ice-footer></ice-footer>
    </div>
</template>
<script>
import iceHeader from '../component/ice-header.vue';
import iceFooter from '../component/ice-footer.vue';
export default {
    data() {
            return {
                artList: [],
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

            //回车提交事件
            enterToDo: function(ev) {

            },

        },
        created() {
            this.$http.get('http://www.asiacream.cn:8001/api/Article/GetList', {

            }).then((response) => {
                this.artList = response.data.Data;
                console.info("1 ", response.data.Data);
            }).catch(function(response) {
                console.warn("09 ", response);
            })
            this.$http.get('http://www.asiacream.cn:8001/api/Article/CGetList', {

            }).then((response) => {
                // this.artList = response.data.Data;
                console.info("1C ", response.data.Data);
            }).catch(function(response) {
                console.warn("09C ", response);
            })
        },
}
</script>
