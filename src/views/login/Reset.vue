<template>
    <div class="register">
        <img class="logo" src="@/assets/logo.png" alt="logo">

        <p class="title">重置密码</p>

        <el-form
            label-position="top"
            label-width="80px"
            :model="resetInfo">

            <el-form-item label="手机号">
                <el-input v-model="resetInfo.mobile" placeholder="手机号"  />
            </el-form-item>
            <el-form-item label="验证码">
                <el-input v-model="resetInfo.code" placeholder="验证码">
                    <span slot="suffix">获取验证码</span>
                </el-input>
            </el-form-item>
            <el-form-item label="新密码">
                <el-input v-model="resetInfo.password" type="password" placeholder="新密码"  />
            </el-form-item>
            <el-form-item label="再次输入新密码">
                <el-input v-model="resetInfo.password2" type="password" placeholder="再次输入新密码"  />
            </el-form-item>
            <el-form-item>
                <el-button type="primary">重置密码</el-button>
            </el-form-item>

        </el-form>

    </div>
</template>

<script>
	export default {
		data() {
			return {
				resetInfo: {
					mobile: '',
                    password: '',
					password2: '',
					code: ''
                }
            }
        }
	}
</script>

