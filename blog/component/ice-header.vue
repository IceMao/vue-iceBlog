<template>
    <div>
        <div class="indentIcon">
        </div>
        <header class="container">
            <div class="header clearfix">
                <div class="headPic">
                    <div class="glassPic"><span></span></div>
                </div>
               <!--  <div class="logo">
                    <h1><a class="headermaintitle" id="Header1_HeaderTitle" href="http://www.cnblogs.com/iceMao/">Ice BLOG</a></h1>
                    <div id="subtitle">web,js</div>
                </div> -->
                <nav>
                    <div><a id="blog_nav_sitehome" href="/#/edit">博客园</a></div>
                    <div><a id="blog_nav_myhome" href="http://www.cnblogs.com/iceMao/">Home</a></div>
                    <div><a id="blog_nav_newpost" rel="nofollow" href="https://i.cnblogs.com/EditPosts.aspx?opt=1">新随笔</a></div>
                    <div><a id="blog_nav_contact" accesskey="9" rel="nofollow" href="https://msg.cnblogs.com/send/IceMao">联系</a></div>
                    <div><a id="blog_nav_rss" href="http://www.cnblogs.com/iceMao/rss">订阅</a></div>
                    <div><a id="blog_nav_admin" rel="nofollow" href="https://i.cnblogs.com/">管理</a></div>
                </nav>
            </div>
        </header>
    </div>
</template>
<script type="text/javascript">
export default {
    data() {
            return {
                iCheck: this.model,
            }
        },
        props: {
            "model": {
                type: [String, Number, Boolean], //选择比较
                default: false,
            },
        },
        methods: {
            result: function() {
                if (!this.emDisabled) {
                    if (this.onVal === this.iCheck) {
                        this.iCheck = this.offVal;
                    } else if (this.offVal === this.iCheck) {
                        this.iCheck = this.onVal;
                    }
                    this.$emit('result', this.iCheck);
                }
            }
        },
        computed: {
            valFn: function() {
                if (this.onVal === this.iCheck) {
                    return true;
                } else if (this.offVal === this.iCheck) {
                    return false;
                }
            }
        },
        created: function() {
            // console.info("this.msg",this);
            // if(this.emDisabled == false){
            //   this.iCheck = this.offVal;
            // }
        }
}
</script>
<style scoped lang="scss">
/*indentIcon begin*/

.indentIcon {
    position: absolute;
    top: 0px;
    right: 155px;
    z-index: 50;
    width: 1px;
    height: 200px;
    background: #bbb;
    animation: shake 5s ease infinite;
}

.indentIcon:after {
    content: "";
    transform: translate(-50%, 327%);
    display: block;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background: linear-gradient( #ED0181, #01ADDD);
    animation: ballColor 5s ease infinite;
}

@keyframes ballColor {
    0% {
        opacity: 0.9;
    }
    25% {
        opacity: 0.7;
    }
    50% {
        opacity: 0.9;
    }
    75% {
        opacity: 0.7;
    }
    100% {
        opacity: 0.9;
    }
}

@keyframes shake {
    0% {
        transform: rotate(30deg);
        transform-origin: top;
        background: linear-gradient( #ED0181, #01ADDD);
    }
    50% {
        transform: rotate(-30deg);
        transform-origin: top;
        background: linear-gradient( #01ADDD, #ED0181);
    }
    100% {
        transform: rotate(30deg);
        transform-origin: top;
        background: linear-gradient( #ED0181, #01ADDD);
    }
}
/*indentIcon end*/
/* header begin*/
.header {
    width: 100%;
    padding-top: 60px;
    margin-bottom: 30px;
    position: relative;
    z-index: 20;
    font-family: fantasy, sans-serif;
}
#header{
    display:none;
    /**sub 图style begin**/
}
.headPic {
    min-width: 400px;
    min-height: 350px;
    margin-top: 35px;
    box-sizing: border-box;
    overflow: hidden;
    background: #01ADDD;
    background: linear-gradient(to bottom right, #ED0181, #01ADDD);
    transition: box-shadow 3s;
}

.glassPic {
    min-width: 100%;
    min-height: 350px;
    background: hsla(0, 0%, 72%, 0.2);
    box-shadow: 0 0 45px 1px #fff inset;
}

.glassPic span {
    display: inline-block;
    padding-left: 40px;
    padding-top: 30px;
}
    /**sub 球style end**/
.logo {
    box-sizing: border-box;
    width: 20%;
    text-align: center;
    padding: 30px;
    float: left;
}
#top{
    display: none;
}
#top h1 {
    font-size: 26px;
    font-weight: 600;
}
#top h1>a{
    color: #444;
    color: linear-gradient(to bottom right, #ED0181, #01ADDD);
}
#top h1>a:hover{
    color: #ED0181;
}
nav {
    box-sizing: border-box;
    padding: 30px;
    width: 464px;
    // float: left;
    margin:0 auto;
}

nav>div {
    float: left;
    /*background-color: #eee;*/
    padding: 5px 12px;
}

nav>div>a {
    color: rgb(24, 70, 76);
}

nav>div:hover>a {
    color: #01ADDD;
}

nav>div:hover {
    padding: 5px 14px;
    color: #01ADDD;
}

nav>div:hover:before {
    content: "..";
    color: #01ADDD;
}

nav>div:hover {
    animation: animate 0.3s ease 1;
    -webkit-animation: animate 0.3s ease 1;
}

@keyframes animate {
    0% {
        padding: 5px 12px;
    }
    100% {
        padding: 5px 14px;
    }
}

/*header end*/


</style>
