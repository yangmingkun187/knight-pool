import ConfigAPI from '@/api/config'
const config = {
	state: {
		coinTypes: [],
		currentCoinType: 'btc'
	},

	mutations: {
		/**
		 * 设置当前选择币种信息
		 * @param state
		 * @param coinType
		 * @constructor
		 */
		SET_COIN_TYPE: ( state, coinType ) => {
			state.currentCoinType = coinType;
		},

		SET_COIN_TYPES: ( state, coinTypes ) => {
			state.coinTypes = coinTypes;
		}
	},

	actions: {
		/**
		 * @desc 获取比重列表
		 */
		async fetchCoinTypes( { commit } ) {
			const { data } = await ConfigAPI.fetchCoinType();
			commit( 'SET_COIN_TYPES', data );
		},

	}
};

export default config;
