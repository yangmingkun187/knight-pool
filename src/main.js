import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'

Vue.config.productionTip = false;

import router from './router'
import 'nprogress/nprogress.css'// Progress 进度条 样式
import store from './store'
import * as filters from './filters' // 全局vue filter
import * as directives from './directive' // 全局vue directives
import components from './components/'
import Polyfill from './utils/legacy/index'
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
});

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
