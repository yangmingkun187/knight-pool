<template>
    <div class="user-info">

        <el-tabs
            tab-position="left"
            v-model="activeName"
            @tab-click="handleClick"
        >

            <el-tab-pane label="基本信息"  name="first">

                <p class="title">基本设置</p>
                <el-form label-position="top">
                    <el-form-item label="用户名">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="手机号码">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="加入时间">
                        <el-date-picker
                            type="date"
                            clearable
                            placeholder="选择日期"
                        >
                        </el-date-picker>
                    </el-form-item>
                </el-form>

            </el-tab-pane>

            <el-tab-pane label="修改密码" name="second">
                <p class="title">修改密码</p>
                <el-form label-position="top">
                    <el-form-item label="原密码">
                        <el-input type="password"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码">
                        <el-input type="password"></el-input>
                    </el-form-item>
                    <el-form-item label="请再次输入新密码">
                        <el-input type="password"></el-input>
                    </el-form-item>
                    <el-form-item class="btn-wrap">
                        <el-button type="primary">保存</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>

            <el-tab-pane label="登录日志" name="third">
                <p class="title">登录日志</p>

            </el-tab-pane>

            <el-tab-pane label="通知消息" name="fourth">
                <p class="title">通知消息</p>

            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
	export default {
		name: 'BasicInfo'
	}
</script>

<style scoped>

</style>
