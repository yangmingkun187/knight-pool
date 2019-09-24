<template>
    <el-container>
        <!-- 页头 -->
        <el-header height="100px">
            <LoginHeader/>
        </el-header>

        <el-main class="login-main">
            <router-view/>
        </el-main>

    </el-container>
</template>

<script>
	// @ is an alias to /src
	import LoginHeader from '@/views/login/LoginHeader'

	export default {
		name: 'home',
		components: {
			LoginHeader
		}
	}
</script>

