import Vue from 'vue';
import vueResource from 'vue-resource';
import vueRouter from 'vue-router';

Vue.use(vueResource);
Vue.use(vueRouter);

//.vue 页面
// import blog from './views/blog.vue';
import blog from './views/blog.vue';
//公共css
require('./assets/common/common.css');

//路由
const routes = [{
    path: '/',
    component: blog
}, {
    path: '/foo',
    component: blog
}];

const router = new vueRouter({
    routes
});

const app = new Vue({
    router
}).$mount('#app');
