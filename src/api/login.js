import request from '@/utils/$http'
export default {
  Jwtoken (param) { // 获取token
    return request({
      url: 'Identity/Jwtoken',
      method: 'post',
      data: param
    })
  },
  info () { // 登录
    return request({
      url: '/Identity/Profile',
      method: 'get'
    })
  },
  logout () {
    return request.post('/Identity/Logout')
  },
  // 获取菜单
  GetMenusByRole (params) {
    return request({
      url: '/Admin/Menu/GetMenusByRoleAsync',
      method: 'get',
      params: params
    })
  },
  // 修改密码
  ChangePassword (param) {
    return request.post('/Identity/ChangePassword', param)
  },
  // 获取授权
  GetAuthInfo (params) {
    return request({
      url: '/Security/GetAuthInfo',
      method: 'get',
      params: params
    })
  },
  // 获取验证码
  GetVerifyCode () {
    return request.get('/Common/VerifyCode')
  }
}
