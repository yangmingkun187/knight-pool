import axios from 'axios'
import url from '@/config'
import Router from '@/router'
import { getToken } from '@/utils/token'

const instance = axios.create({
    baseURL: url.baseURL,
    responseEncoding: 'utf8',
    headers: {
      'Content-Type': 'application/json'
    },
    timeout: 1000 * 60
})

let token = getToken()
instance.interceptors.request.use(function (config) {
    if (token) {
      config.headers['Authorization'] = token
    }
    return config
}, function (error) {
    return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
    // if (response.data.code === 401) {
    //   Router.push('/login')
    //   return
    // }
    return response.data
}, function (error) {
    return Promise.reject(error)
})

export default instance
