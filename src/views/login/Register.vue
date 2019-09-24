<template>
    <div class="register">
        <img class="logo" src="@/assets/logo.png" alt="logo">

        <el-form
            label-position="top"
            label-width="80px"
            :model="registerInfo">

            <el-form-item label="用户名">
                <el-input v-model="registerInfo.username" placeholder="用户名" />
            </el-form-item>
            <el-form-item label="手机号">
                <el-input v-model="registerInfo.mobile" placeholder="手机号"  />
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="registerInfo.password" type="password" placeholder="密码"  />
            </el-form-item>
            <el-form-item label="再次输入密码">
                <el-input v-model="registerInfo.password2" type="password" placeholder="再次输入密码"  />
            </el-form-item>
            <el-form-item label="验证码">
                <el-input v-model="registerInfo.code" placeholder="验证码">
                    <span slot="suffix">获取验证码</span>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">注册</el-button>
            </el-form-item>
            <el-form-item style="text-align: center">
                <router-link class="to-login" to="/">使用已有账户登录</router-link>
            </el-form-item>

        </el-form>

    </div>
</template>

<script>
	export default {
		data() {
			return {
				registerInfo: {
					username: '',
					mobile: '',
                    password: '',
					password2: '',
					code: ''
                }
            }
        }
	}
</script>

