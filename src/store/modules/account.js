import AccountAPI from '@/api/account'
const config = {
	state: {
		accountList: [],
		currentAccount: null
	},

	mutations: {
		/**
		 * 设置当前选择币种信息
		 * @param state
		 * @param list
		 * @constructor
		 */
		SET_ACCOUNT_LIST: ( state, list ) => {
			state.accountList = list;
		},

		SET_ACCOUNT: ( state, account ) => {
			state.currentAccount = account;
		}
	},

	actions: {
		/**
		 * @desc 获取子账号列表
		 */
		async fetchAccountList( { commit }, params ) {
			const res = await AccountAPI.fetchAccountList(params);
			commit( 'SET_ACCOUNT', res.results[0] );
			commit( 'SET_ACCOUNT_LIST', res.results );
		},

	}
};

export default config;
