import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress' // Progress 进度条
import children from './homeChildren'

Vue.use(Router);

const router = new Router({
	mode: 'hash',
	scrollBehavior : () => ({ y : 0 }),
	base: process.env.BASE_URL,
	routes: [
		{path: '/', redirect: '/home'},
		{
			path: '/login',
			name: 'login',
			component: () => import('@/views/Login.vue'),
		},
		{
			path: '/home',
			name: 'home',
			component: () => import('@/views/Home.vue'),
			children: children
		}
	]
});

/**
 * 路由过场动画--start
 */
Vue.cancel = [];
// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
	NProgress.start(); // 开启Progress
	while (Vue.cancel.length > 0) {
		Vue.cancel.pop()('cancel')
	}
	try {
		NProgress.done()
		next()
	} catch (err) {
		NProgress.done()
	}
});
 /**
	 * 路由过场动画--end
 */
router.afterEach(() => {
	NProgress.done() // 结束Progress
});

export default router
