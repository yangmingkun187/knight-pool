<template>
    <el-container>
        <!-- 页头 -->
        <el-header height="100px">
            <AppHeader/>
        </el-header>

        <el-main>
            <router-view/>
        </el-main>

        <!-- 页脚 -->
        <el-footer height="386px">
            <AppFooter/>
        </el-footer>
    </el-container>
</template>

<script>
	// @ is an alias to /src
	import AppHeader from '@/views/layout/header/AppHeader'
	import AppFooter from '@/views/layout/footer/AppFooter'
	import {mapActions} from 'vuex';

	export default {
		name: 'home',
		components: {
			AppHeader,
			AppFooter
		},
		async created() {
			await this.fetchCoinTypes()
			await this.fetchAccountList({})
		},
		methods: {
			...mapActions([
				"fetchCoinTypes",
				"fetchAccountList",
			]),
		}
	}
</script>

