import Cookies from 'js-cookie';

const USER_INFO = '_user_info_';

const user = {
	state: {
		userInfo: Cookies.get(USER_INFO) ? JSON.parse(Cookies.get(USER_INFO)) : null,
	},
	
	mutations: {
		/**
		 * 增量设置用户信息
		 * @param state
		 * @param userInfo
		 * @constructor
		 */
		SET_USER_INFO: ( state, userInfo ) => {
			state.userInfo = state.userInfo && userInfo ? Object.assign( state.userInfo, userInfo ) : userInfo;
		},

	},
	
	actions: {
	}
};

export default user;
