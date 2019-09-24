<template>
    <el-container>
        <!-- 页头 -->
        <el-header height="100px">
            <LoginHeader/>
        </el-header>

        <el-main class="login-main">
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
	import LoginHeader from '@/views/login/LoginHeader'
	import AppFooter from '@/views/layout/footer/AppFooter'

	export default {
		name: 'home',
		components: {
			LoginHeader,
			AppFooter
		}
	}
</script>

