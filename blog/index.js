import Vue from 'vue';
import vueResource from 'vue-resource';
import vueRouter from 'vue-router';
import showdown from 'showdown';

Vue.use(vueResource);
Vue.use(vueRouter);

//.vue 页面
import blog from './views/blog.vue';
import article from './views/article.vue';
import edit from './views/edit.vue';
//公共css
require('./assets/common/common.css');
//js
require('./assets/js/showdown.js');
//路由
const routes = [{
    path: '/',
    component: blog
}, {
    path: '/edit/:id',
    component: edit
}, {
    path: '/article/:id',
    component: article
}];

const router = new vueRouter({
  // hashbang: false,
  // mode: 'history',
    routes
});

const app = new Vue({

    router,
}).$mount('#app');
