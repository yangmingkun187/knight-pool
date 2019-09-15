const children = [
	{
		path: '/dashboard',
		name: 'dashboard',
		component: () => import('@/views/dashboard/dashboard.vue'),
	},

	{
		path: '/setting',
		name: 'setting',
		component: () => import('@/views/account/BasicInfo.vue')
	}
]

export default children
