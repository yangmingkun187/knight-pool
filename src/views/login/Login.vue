<template>
    <div class="login">
        <img class="logo" src="@/assets/images/logo.png" alt="logo">
        <el-tabs v-model="activeName">

            <el-tab-pane label="账号密码登录" name="first">
                <el-form
                    :model="userInfo"
                    :rules="rules1"
                    ref="userInfo"
                    label-position="top">

                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="userInfo.username" placeholder="用户名" />
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="userInfo.password" type="password" placeholder="密码"  />
                    </el-form-item>
                    <el-form-item>
                        <el-checkbox v-model="isAutoLogin">自动登录</el-checkbox>
                        <router-link class="forget-password" to="/reset">忘记密码？</router-link>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" :loading="submitLoading1" @click="userLogin">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>

            <el-tab-pane label="手机号登录" name="second">
                <el-form
                    :model="mobileInfo"
                    :rules="rules2"
                    ref="mobileInfo"
                    label-position="top">

                    <el-form-item label="手机号" prop="mobile">
                        <el-input v-model="mobileInfo.mobile" placeholder="手机号" />
                    </el-form-item>
                    <el-form-item label="验证码" prop="code">
                        <el-input v-model="mobileInfo.code" placeholder="验证码">
                            <span slot="suffix" @click="sendMsg">获取验证码</span>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-checkbox v-model="isAutoLogin">自动登录</el-checkbox>
                        <router-link class="forget-password" to="/reset">忘记密码？</router-link>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" :loading="submitLoading2" @click="mobileLogin">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import loginApi from '@/api/login'
    import { setToken } from '@/utils/token'

    export default {
		data() {
			return {
				activeName: 'first',
				isAutoLogin: false,
                userInfo: {
                    username: '',
                    password: ''
                },
                mobileInfo: {
                    mobile: '',
                    code: ''
                },
				rules1: {
					username: [
						{ required: true, message: '请输入用户名', trigger: 'blur' },
					],
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' },
					]
                },
				rules2: {
					mobile: [
						{ required: true, message: '请输入手机号', trigger: 'blur' },
					],
					code: [
						{ required: true, message: '请输入验证码', trigger: 'blur' },
					]
                },
				submitLoading1: false,
				submitLoading2: false,
            }
        },
		methods: {
			sendMsg() {
				loginApi.sendMsg({
					mobile: this.mobileInfo.mobile,
					code_type: 5
				}).then(res => {
					if (res.code === 0) {
						this.$message.success(res.message)
					} else {
						this.$message.error(res.message)
					}
				})
            },
			userLogin() {
				this.$refs['userInfo'].validate(valid => {
					if (valid) {
						this.submitLoading1 = true
						loginApi.userLogin(this.userInfo).then(res => {
							this.submitLoading1 = false
                            if (res.code === 0) {
                                this.$message.success(res.message)
                                setToken(res.token)
                                this.$router.push('/')
                            } else {
                                this.$message.error(res.message)
                            }
						})
					}
				})
			},
			mobileLogin() {
				this.$refs['mobileInfo'].validate(valid => {
					if (valid) {
						this.submitLoading2 = true
						loginApi.mobileLogin(this.mobileInfo).then(res => {
							this.submitLoading2 = false
							if (res.code === 0) {
								this.$message.success(res.message)
								setToken(res.token)
								this.$router.push('/')
							} else {
								this.$message.error(res.message)
							}
						})
					}
				})
            }
		}
	}
</script>

