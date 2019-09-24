import request from '@/utils/axios'

export default {
	sendMsg (params) { // 发送验证码
		return request.post('/user/sms/', params)
	},
	register (params) { // 注册
		return request.post('/user/register', params)
    },
	userLogin (params) { // 用户名登录
		return request.post('/user/login', params)
	},
	mobileLogin (params) { // 手机登录
		return request.post('/user/mobile/login', params)
	},
}
