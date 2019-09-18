const children = [
	{
		path: '/dashboard',
		name: 'dashboard',
		component: () => import('@/views/dashboard/Dashboard.vue'),
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
