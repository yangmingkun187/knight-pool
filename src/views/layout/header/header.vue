<template>
    <div class="app-header">

        <el-menu :default-active="activeIndex"
                 class="header-menu"
                 mode="horizontal"
                 text-color="#439AFF"
                 active-text-color="#1989FA"
                 @select="handleSelect">
            <el-menu-item index="1">用户面板</el-menu-item>
            <el-menu-item index="2">我的矿机</el-menu-item>
            <el-menu-item index="3">收益记录</el-menu-item>
        </el-menu>

        <el-select v-model="value"
                   size="small"
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
