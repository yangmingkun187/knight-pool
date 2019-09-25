<template>
    <div class="app-header">

        <el-row type="flex" align="middle">

            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">

            </el-col>

            <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                <el-menu :default-active="activeIndex"
                         class="header-menu"
                         mode="horizontal"
                         text-color="#439AFF"
                         active-text-color="#1989FA"
                         @select="handleSelect">
                    <el-menu-item index="dashboard">{{$t('header.nav1')}}</el-menu-item>
                    <el-menu-item index="machines">{{$t('header.nav2')}}</el-menu-item>
                    <el-menu-item index="3">{{$t('header.nav3')}}</el-menu-item>
                </el-menu>
            </el-col>

            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
                <el-select v-model="coinType"
                           size="small"
                           class="change-kind"
                           @change="changeType"
                           placeholder="请选择">
                    <el-option
                            v-for="item in coinTypes"
                            :key="item"
                            :label="item"
                            :value="item">
                    </el-option>
                </el-select>

                <el-input
                        size="small"
                        class="search-input"
                        placeholder="请输入矿机名称关键词"
                        suffix-icon="el-icon-search"
                        v-model="searchKey">
                </el-input>
            </el-col>

            <el-col :xs="8" :sm="4" :md="4" :lg="4" :xl="4" style="text-align: right">
                <i class="el-icon-message-solid"></i>
                <el-select v-model="value"
                           size="small"
                           class="change-account"
                           @change="changeAccount"
                           placeholder="请选择子账号">
                    <el-option
                            v-for="item in accountList"
                            :key="item.id"
                            :label="item.account_name"
                            :value="item">
                    </el-option>
                </el-select>
            </el-col>

        </el-row>

    </div>

</template>

<script>
	import {mapGetters, mapActions} from 'vuex';

	export default {
		props: {},
		computed: {
			...mapGetters([
				'coinTypes',
				'currentCoinType',
				'accountList',
				'currentAccount',
			]),
		},
		data() {
			return {
				activeIndex: 'dashboard',

				value: '',
				searchKey: '',

				coinType: this.currentCoinType,
				account: this.currentAccount,
			}
		},
		methods: {
			handleSelect(key) {
				this.$router.push({
					name: key
				})
			},

			changeType(val) {
				this.$store.commit('SET_COIN_TYPE', val)
			},

			changeAccount(val) {
				this.$store.commit('SET_ACCOUNT', val)
			}

		},
		created() {

		}
	};
</script>
