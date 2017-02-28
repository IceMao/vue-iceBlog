<style scoped>
@import './../assets/common/blog.css';
</style>
<template>
    <div class="blog">
        <div class="indentIcon">
        </div>
        <header class="container">
            <div class="header clearfix">
                <div class="headPic">
                    <div class="glassPic"><span></span></div>
                </div>
                <div class="logo">
                    <h1><a class="headermaintitle" id="Header1_HeaderTitle" href="http://www.cnblogs.com/iceMao/">Ice BLOG</a></h1>
                    <!-- <div id="subtitle">web,js</div> -->
                </div>
                <nav>
                    <div><a id="blog_nav_sitehome" href="http://www.cnblogs.com/">博客园</a></div>
                    <div><a id="blog_nav_myhome" href="http://www.cnblogs.com/iceMao/">Home</a></div>
                    <div><a id="blog_nav_newpost" rel="nofollow" href="https://i.cnblogs.com/EditPosts.aspx?opt=1">新随笔</a></div>
                    <div><a id="blog_nav_contact" accesskey="9" rel="nofollow" href="https://msg.cnblogs.com/send/IceMao">联系</a></div>
                    <div><a id="blog_nav_rss" href="http://www.cnblogs.com/iceMao/rss">订阅</a></div>
                    <div><a id="blog_nav_admin" rel="nofollow" href="https://i.cnblogs.com/">管理</a></div>
                </nav>
            </div>
        </header>
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
        <footer>
            <p class="container">Powered by: ice cream Copyright © IceMao</p>
        </footer>
    </div>
</template>
<script>
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

        },
        //方法
        methods: {
            //回车提交事件
            enterToDo: function(ev) {

            },

        },
        created() {
            this.$http.post('http://admin.citywealth.cn/Login/Login', {
                "LoginName":"6","LoginPwd":"213123"
            }).then((response)=>{
                console.info(response);
            }).catch(function(response){
                console.warn(response);
            })
        },
}
</script>
