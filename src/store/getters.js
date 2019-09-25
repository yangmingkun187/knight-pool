const getters = {
	coinTypes: state => state.config.coinTypes,
	currentCoinType: state => state.config.currentCoinType,
	accountList: state => state.account.accountList,
	currentAccount: state => state.account.currentAccount,
};
export default getters
