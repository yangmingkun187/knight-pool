<template>
    <div class="register">
        <img class="logo" src="@/assets/images/logo.png" alt="logo">

        <p class="title">注册</p>

        <el-form
            :model="registerInfo"
            :rules="rules"
            ref="registerInfo"
            label-position="top">

            <el-form-item label="用户名" prop="username">
                <el-input v-model="registerInfo.username" placeholder="用户名" />
            </el-form-item>
            <el-form-item label="手机号" prop="mobile">
                <el-input v-model="registerInfo.mobile" placeholder="11位手机号"  />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="registerInfo.password" type="password" placeholder="6 - 16位密码，区分大小写"  />
            </el-form-item>
            <el-form-item label="再次输入密码" prop="password2">
                <el-input v-model="registerInfo.password2" type="password" placeholder="再次输入密码"  />
            </el-form-item>
            <el-form-item label="验证码" prop="code">
                <el-input v-model="registerInfo.code" placeholder="验证码">
                    <span slot="suffix" @click="sendMsg">获取验证码</span>
                </el-input>
            </el-form-item>
            <el-form-item style="margin-top: 40px">
                <el-button type="primary" :loading="submitLoading" @click="registerNew">注册</el-button>
            </el-form-item>
            <el-form-item style="text-align: center">
                <router-link class="to-login" to="/login">使用已有账户登录</router-link>
            </el-form-item>

        </el-form>

    </div>
</template>

<script>
    import loginApi from '@/api/login'

	export default {
		data() {
			return {
				registerInfo: {
					username: '',
					mobile: '',
                    password: '',
					password2: '',
					code: ''
                },
				rules: {
					username: [
						{ required: true, message: '请输入用户名', trigger: 'blur' },
					],
					mobile: [
						{ required: true, message: '请输入手机号', trigger: 'blur' },
						{
							pattern: /^1[3456789]\d{9}$/,
							message: '请输入有效手机号',
							trigger: 'blur'
						},
					],
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' },
						{ min: 6, message: '密码长度至少6位', trigger: 'blur' }
					],
					password2: [
						{ required: true, message: '请输入密码', trigger: 'blur' },
						{ validator: (rule, value, callback) => {
                                if (this.registerInfo.password2 !== this.registerInfo.password) {
                                    callback(new Error('两次密码不一致'))
                                } else {
                                    callback()
                                }
							}, trigger: 'blur' }
                    ],
					code: [
						{ required: true, message: '请输入验证码', trigger: 'blur' },
					]
                },
				submitLoading: false
            }
        },
		methods: {
			sendMsg() {
				loginApi.sendMsg({
					mobile: this.registerInfo.mobile,
					code_type: 1
				}).then(res => {
					if (res.code === 0) {
						this.$message.success(res.message)
					} else {
						this.$message.error(res.message)
					}
				})
            },
			registerNew() {
				this.$refs['registerInfo'].validate(valid => {
					if (valid) {
						this.submitLoading = true
						loginApi.register(this.registerInfo).then(res => {
							this.submitLoading = false
							if (res.code === 0) {
								this.$message.success(res.message)
								this.$router.push('/login')
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

