<template>
    <div class="register">
        <img class="logo" src="@/assets/images/logo.png" alt="logo">

        <p class="title">重置密码</p>

        <el-form
            :model="resetInfo"
            :rules="rules"
            ref="resetInfo"
            label-position="top">

            <el-form-item label="手机号" prop="mobile">
                <el-input v-model="resetInfo.mobile" placeholder="手机号"  />
            </el-form-item>
            <el-form-item label="验证码" prop="code">
                <el-input v-model="resetInfo.code" placeholder="验证码">
                    <span slot="suffix" @click="sendMsg">获取验证码</span>
                </el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="password1">
                <el-input v-model="resetInfo.password1" type="password" placeholder="新密码"  />
            </el-form-item>
            <el-form-item label="再次输入新密码" prop="password2">
                <el-input v-model="resetInfo.password2" type="password" placeholder="再次输入新密码"  />
            </el-form-item>
            <el-form-item style="margin-top: 40px">
                <el-button type="primary" :loading="submitLoading" @click="resetPwd">重置密码</el-button>
            </el-form-item>

        </el-form>

    </div>
</template>

<script>
    import loginApi from '@/api/login'

	export default {
		data() {
			return {
				resetInfo: {
					mobile: '',
                    password1: '',
					password2: '',
					code: ''
                },
				rules: {
					mobile: [
						{ required: true, message: '请输入用户名', trigger: 'blur' },
					],
					code: [
						{ required: true, message: '请输入验证码', trigger: 'blur' },
					],
					password1: [
						{ required: true, message: '请输入密码', trigger: 'blur' },
						{ min: 6, message: '密码长度至少6位', trigger: 'blur' }
					],
					password2: [
						{ required: true, message: '请输入密码', trigger: 'blur' },
						{ validator: (rule, value, callback) => {
								if (this.resetInfo.password2 !== this.resetInfo.password1) {
									callback(new Error('两次密码不一致'))
								} else {
									callback()
								}
							}, trigger: 'blur' }
					]
				},
				submitLoading: false
            }
        },
		methods: {
			sendMsg() {
				loginApi.sendMsg({
					mobile: this.resetInfo.mobile,
					code_type: 4
				}).then(res => {
					if (res.code === 0) {
						this.$message.success(res.message)
					} else {
						this.$message.error(res.message)
					}
				})
			},
			resetPwd() {
				this.$refs['resetInfo'].validate(valid => {
					if (valid) {
						this.submitLoading = true
						loginApi.mobileReset(this.resetInfo).then(res => {
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

