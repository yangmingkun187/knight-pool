import axios from 'axios'
import url from '@/config'
import { getToken, getCsrfToken } from '@/utils/token'

const instance = axios.create({
    baseURL: url.baseURL,
    responseEncoding: 'utf8',
    headers: {
      'Content-Type': 'application/json'
    },
    timeout: 1000 * 60
})

let token = getToken()
let csrfToken = getCsrfToken()
instance.interceptors.request.use(function (config) {
    if (token) {
      config.headers['Authorization'] = `Token: ${token}`
    }
    if(csrfToken) {
        config.headers['csrfToken'] = `csrfToken: ${csrfToken}`
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
