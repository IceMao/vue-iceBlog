import Vue from 'vue';
import vueResource from 'vue-resource';
import vueRouter from 'vue-router';

Vue.use(vueResource);
Vue.use(vueRouter);

//.vue 页面
// import blog from './views/blog.vue';
import index from './views/index.vue';
//公共css
require('./assets/common/common.css');

const foo = {template:'<div>FOOdfsdfsdf</div>'}


//路由
const routes = [{
  path:'/',
  component:foo
},{
  path:'/foo',
  component:index
}
// ,{
//   path:'/blog',
//   component:blog
// }
];

const router = new vueRouter({
  routes
});

const app = new Vue({
  router
}).$mount('#app');

