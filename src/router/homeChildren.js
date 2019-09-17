const children = [
	{
		path: '/dashboard',
		name: 'dashboard',
		component: () => import('@/views/dashboard/dashboard.vue'),
	},

	{
		path: '/userInfo',
		name: 'userInfo',
		component: () => import('@/views/userinfo/UserInfo.vue')
	}
]

export default children
