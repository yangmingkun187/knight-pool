import axios from 'axios';
import Cookies from 'js-cookie';
// import router from '../router';

const CSRF_TOKEN_KEY = 'x-csrf-token';

/// 创建axios实例
const service = axios.create( {
	baseURL: '//' + location.host, // api的base_url
	timeout: 100000                  // 请求超时时间
} );

// request拦截器
service.interceptors.request.use( config => {
	if (config.url.indexOf( '?' ) !== -1) {
		config.url = config.url + '&' + new Date().getTime();
	} else {
		config.url = config.url + '?' + new Date().getTime();
	}
	let csrfToken = Cookies.get( 'x-csrf-token' );
	if (csrfToken) {
		config.headers[ CSRF_TOKEN_KEY ] = csrfToken; // 让每个请求携带token--[CSRF_TOKEN_KEY]为自定义key
	}
	return config;
}, error => {
	// Do something with request error
	Promise.reject( error );
} )

// respone拦截器
service.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		return Promise.reject( error.response.data );
	}
);

export default service;
