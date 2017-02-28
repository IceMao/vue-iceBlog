<style scoped>
.test {
    width: 100%;
    height: 100%;
    font-family: Times, Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;
    color: #2c3e50;
    background-color: (255, 255, 255, 0.5);
    background-size: 100%;
    min-width:980px;
}

.del {
    display: inline-block;
    float: right;
    margin-right: 10px;
    cursor: pointer;
}

.del:hover {
    color: #a5a5a5;
}

.list {
    margin-left: 20px;
    background-color: #eee;
    min-height: 30px;
    margin-bottom: 5px;
    padding: 15px 5px 1px 14px;
}

.container {
    width: 670px;
    margin: 0 auto;
    padding: 0 20px;
}

.nav {
    height: 65px;
    background-color: rgb(155,137,130);
    width: 100%;
}

.inp {
    height: 60px;
    line-height: 60px;
    font-size: 2em;
    margin-left: 15px;
    margin-right: 26px;
}

.inText {
    height: 30px;
    width: 200px;
    margin-left: 15px;
    border: none;
    box-shadow: 0 0 13px #968c8c;
    padding-left: 10px;
    border-radius: 5px;
    position: absolute;
    top: 17px;
    transition: width cubic-bezier(0.75, 0.34, 0.87, 0.65) 0.3s;
}

.inText:focus {
    outline: #736a6a auto 1px;
}

.inText:hover {
    width: 300px;
    transition: width ease 0.3s;
}

i.count {
    margin-right: 10px;
    float: right;
    width: 20px;
    height: 20px;
    line-height: 19px;
    text-align: center;
    background: #ccc;
    border-radius: 50%;
}

p {
    padding-left: 15px;
}

.compl {
    color: #a5a5a5;
}
</style>
<template>
    <div class="test">
        <div class="nav">
        <span class="inp">ToDoList</span>
        <div class="container">
            <input class="inText" type="text" @keyup.13="enterToDo($event)" v-model="write" placeholder="添加toDo">
        </div></div>
        <div class="container">
            <p>正在进行<i class="count">{{count}}</i></p>
            <div class="list" v-for="(x,index) in list" v-if="x.change == false">
                <input type="checkbox" @click="checkFn(index)">
                <span>{{x.name}}</span>
                <div class="del" @click="del(index)">x</div>
            </div>
            <p>已完成<i class="count">{{counted}}</i></p>
            <div class="list" v-for="(y,index) in list" v-if="y.change == true">
                <input type="checkbox" checked="y.change" @click="checkFn(index)">
                <span class="compl">{{y.name}}</span>
                <div class="del" @click="del(index)">x</div>
            </div>
        </div>
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

                count: 0,
                counted: 0,
            }

        },
        //组件注册
        components: {

        },
        //方法
        methods: {
            //回车提交事件
            enterToDo: function(ev) {
                if (this.write === "" || this.write.trim() === "") {
                    alert("请输入内容…………");
                } else {
                    this.list.push({
                        change: false,
                        name: this.write
                    });
                    this.write = "";
                    this.count++;
                }
            },
            //选择
            checkFn: function(index) {
                console.log(index, "  ", this.list[index].change);

                if (this.list[index].change == false) {
                    this.list[index].change = true;
                    this.count--;
                    this.counted++;
                } else {
                    this.list[index].change = false;
                    this.count++;
                    this.counted--;
                }
            },
            //删除事件
            del: function(index) {

                if (this.list[index].change == false) {
                    this.count--;
                } else {
                    this.counted--;
                }
                this.list.splice(index, 1);
            },
        },
        created() {
            var temp = [{
                "name": "我是事件1",
                "change": false
            }, {
                "name": "我是事件 2",
                "change": true
            }, {
                "name": "我是事件 3",
                "change": true
            }, {
                "name": "我是事件 4",
                "change": false
            }, ];
            this.list = temp;
            for (var it in this.list) {
                if (this.list[it].change == true) {
                    this.count++;
                } else {
                    this.counted++;
                }
            }
            // console.info("http:",this.$http.get())
            // this.$http.get('./../../thing.json').then(response => {
            //     console.info("res:",response)
            //     return response;
            // }).then(blob => {
            // console.info("resError:",response)
            // })
        },

}
</script>
