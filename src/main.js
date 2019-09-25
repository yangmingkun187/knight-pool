import Vue from 'vue'
import App from './App.vue'
import store from './store/index';

Vue.config.productionTip = false;

import router from './router'
import * as filters from './filters' // 全局vue filter
import * as directives from './directive' // 全局vue directives
import components from './components/'
import Polyfill from './utils/legacy/index'

import 'nprogress/nprogress.css'// Progress 进度条 样式
import './styles/app.scss'

import './plugins/element.js'
import i18n from './plugins/i18n/i18n';

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
	i18n,
	render: h => h(App)
}).$mount('#app');
