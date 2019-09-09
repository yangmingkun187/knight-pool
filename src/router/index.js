import Vue from 'vue';
import Router from 'vue-router';

const HelloWorld = resolve => require(['../views/HelloWorld'], resolve)

Vue.use(Router);

export const constantRouterMap = [
	{
		path: '/',
		component: HelloWorld,
		name: 'HelloWorld',
	},
	{path: '*', redirect: '/', hidden: true}
]

export const asyncRouterMap = [];

export default new Router({
	mode: 'history', //后端支持可开
	scrollBehavior : () => ({ y : 0 }),
	routes: constantRouterMap
});
