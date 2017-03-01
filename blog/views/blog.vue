<style scoped>
@import './../assets/common/blog.css';
</style>
<template>
    <div class="blog">
        <ice-header></ice-header>

        <!--正文-->
        <section class="noteList container">
            <section class="noteItem">
                <h4><a href="">angular：关于ng-repeat和ng-options</a></h4>
                <p>posted @ 2016-09-10 09:08 IceMao</p>
                <p>二者都可用于实现下拉列表，并且度娘上有很多关于两者的内容，此处不再赘述，本文为了说明在最近的项目中遇到的相关问题， 可以写成如下格式 ng repeat ng options 区别： 1. 如上所示，当在select中时ng repeat需要写在option中，而ng options不需要optio</p>
            </section>
            <section class="noteItem">
                <h4><a href="">angular2：关于ng-repeat和ng-options</a></h4>
                <p>posted @ 2016-09-10 09:08 IceMao</p>
                <p>二者都可用于实现下拉列表，并且度娘上有很多关于两者的内容，此处不再赘述，本文为了说明在最近的项目中遇到的相关问题， 可以写成如下格式 ng repeat ng options 区别： 1. 如上所示，当在select中时ng repeat需要写在option中，而ng options不需要optio</p>
            </section>
            <section class="noteItem">
                <h4><a href="">angular3：关于ng-repeat和ng-options</a></h4>
                <p>posted @ 2016-09-10 09:08 IceMao</p>
                <p>二者都可用于实现下拉列表，并且度娘上有很多关于两者的内容，此处不再赘述，本文为了说明在最近的项目中遇到的相关问题， 可以写成如下格式 ng repeat ng options 区别： 1. 如上所示，当在select中时ng repeat需要写在option中，而ng options不需要optio</p>
            </section>
            <section class="noteItem">
                <h4><a href="">angular4：关于ng-repeat和ng-options</a></h4>
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

            //回车提交事件
            enterToDo: function(ev) {

            },

        },
        created() {
            this.$http.post('http://admin.citywealth.cn/Login/Login', {
                "LoginName": "6",
                "LoginPwd": "213123"
            }).then((response) => {
                console.info(response);
            }).catch(function(response) {
                console.warn(response);
            })
            console.info("showdown", showdown);
        },
}
</script>
