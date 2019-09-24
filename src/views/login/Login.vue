<template>
    <div class="login">
        <img class="logo" src="@/assets/logo.png" alt="logo">
        <el-tabs v-model="activeName">

            <el-tab-pane label="用户管理" name="first">
                <el-form
                    label-position="top"
                    label-width="80px"
                    :model="userInfo">

                    <el-form-item label="用户名">
                        <el-input v-model="userInfo.username" placeholder="用户名" />
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="userInfo.password" type="password" placeholder="密码"  />
                    </el-form-item>
                    <el-form-item>
                        <el-checkbox v-model="isAutoLogin">自动登录</el-checkbox>
                        <router-link class="forget-password" to="/">忘记密码？</router-link>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>

            <el-tab-pane label="配置管理" name="second">
                <el-form
                    label-position="top"
                    label-width="80px"
                    :model="mobileInfo">

                    <el-form-item label="手机号">
                        <el-input v-model="mobileInfo.mobile" placeholder="手机号" />
                    </el-form-item>
                    <el-form-item label="验证码">
                        <el-input v-model="mobileInfo.code" placeholder="验证码">
                            <span slot="suffix">获取验证码</span>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-checkbox v-model="isAutoLogin">自动登录</el-checkbox>
                        <router-link class="forget-password" to="/">忘记密码？</router-link>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
	export default {
		data() {
			return {
				activeName: 'first',
                userInfo: {
                    username: '',
                    password: ''
                },
                mobileInfo: {
                    mobile: '',
                    code: ''
                },
				isAutoLogin: false
            }
        }
	}
</script>

