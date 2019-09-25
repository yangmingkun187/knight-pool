import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import auth from './modules/auth';
import account from './modules/account';
import config from './modules/config';

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		auth,
		account,
		config,
	},
	getters,
});

export default store
