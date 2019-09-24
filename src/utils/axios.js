import axios from 'axios'
import url from '@/config'
import Router from '@/router'
import { getToken } from '@/utils/token'
import { Spin } from 'iview'
// import Qs from 'qs'
const instance = axios.create({
  baseURL: url.baseURL,
  responseEncoding: 'utf8',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 1000 * 60
  // transformRequest: [function (data, headers) {
  //   console.log('参数',data)
  //   return JSON.stringify(data);
  // }]
})

instance.interceptors.request.use(function (config) {
  let token = getToken()
  if (token) {
    config.headers['Authorization'] = getToken()
  }
  if (config.loading) {
    Spin.show()
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
  if (response.data.Type === 401) {
    Router.push('/')
    return
  }
  if (response.config.loading) {
    setTimeout(() => {
      Spin.hide()
    }, 400)
  }
  return response.data
}, function (error) {
  return Promise.reject(error)
})

export default instance
