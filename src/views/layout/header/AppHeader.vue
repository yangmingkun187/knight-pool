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
                    <el-menu-item index="1">{{$t('header.nav1')}}</el-menu-item>
                    <el-menu-item index="2">{{$t('header.nav2')}}</el-menu-item>
                    <el-menu-item index="3">{{$t('header.nav3')}}</el-menu-item>
                </el-menu>
            </el-col>

            <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
                <el-select v-model="value"
                           size="small"
                           class="change-kind"
                           placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>

                <el-input
                        size="small"
                        class="search-input"
                        placeholder="请选择日期"
                        suffix-icon="el-icon-search"
                        v-model="searchKey">
                </el-input>
            </el-col>

            <el-col :xs="8" :sm="4" :md="4" :lg="4" :xl="4" style="text-align: right">
                <i class="el-icon-message-solid"></i>
                <el-select v-model="value"
                           size="small"
                           class="change-account"
                           placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-col>

        </el-row>

    </div>

</template>

<script>
	export default {
		props: {},
		data() {
			return {
				activeIndex: 1,
				options: [{
					value: 'BTC',
					label: 'btc'
				}],
				value: 'BTC',
				searchKey: 'BTC',
			}
		},
		methods: {
			handleSelect() {
			},
		}
	};
</script>
