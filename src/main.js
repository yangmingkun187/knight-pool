import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router';
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css';// Progress 进度条 样式
import store from './store';
import * as filters from './filters'; // 全局vue filter
import * as directives from './directive'; // 全局vue directives
import components from './components/';
import Polyfill from 'utils/legacy/index';
import './plugins/element.js'

//Polyfill
Polyfill.walk();

// 注册全局 filter
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
});

// 注册全局指令
Object.keys(directives).forEach(key => {
	Vue.directive(key, directives[key])
});

// 全局组件注册
Object.keys(components).forEach((key) => {
	Vue.component(key, components[key])
})

/**
 * 路由过场动画--start
 */
Vue.cancel = [];
// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
	NProgress.start(); // 开启Progress
	while (Vue.cancel.length > 0) {
		Vue.cancel.pop()('cancel');
	}
	try {
		NProgress.done();
	} catch (err) {
		NProgress.done();
	}
});

/**
 * 路由过场动画--end
 */
router.afterEach(() => {
	NProgress.done(); // 结束Progress
});

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');


