<style scoped>
@import './../assets/common/blog.css';
</style>
<template>
    <div class="blog">
        <ice-header></ice-header>

        <!--正文-->
        <section class="noteList container">
            <section class="noteItem" v-for="item in artList">
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
                console.info("1 ",response.data.Data);
            }).catch(function(response) {
                console.warn("09 ",response);
            })
            this.$http.get('http://www.asiacream.cn:8001/api/Article/CGetList', {

            }).then((response) => {
                // this.artList = response.data.Data;
                console.info("1C ",response.data.Data);
            }).catch(function(response) {
                console.warn("09C ",response);
            })
        },
}
</script>
