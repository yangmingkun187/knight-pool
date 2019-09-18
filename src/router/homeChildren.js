const children = [
	{
		path: '/Dashboard',
		name: 'dashboard',
		component: () => import('@/views/Dashboard/Dashboard.vue'),
	},

	{
		path: '/userInfo',
		name: 'userInfo',
		component: () => import('@/views/userinfo/UserInfo.vue')
	},

	{
		path: '/accountList',
		name: 'accountList',
		component: () => import('@/views/account/AccountList.vue')
	}
]

export default children
