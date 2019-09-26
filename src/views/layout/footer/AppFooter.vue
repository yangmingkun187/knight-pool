<template>
    <div class="app-footer">
        <el-row :gutter="10" type="flex" justify="space-between">
            <el-col :span="6" style="text-align: left">
                <p class="title">{{$t('footer.link')}}</p>
                <ul class="link-wrap">
                    <li>
                        <a href="">友情网站1</a>
                    </li>
                    <li>
                        <a href="">友情网站1</a>
                    </li>
                    <li>
                        <a href="">友情网站1</a>
                    </li>
                    <li>
                        <a href="">友情网站1</a>
                    </li>
                </ul>
            </el-col>

            <el-col :span="6" style="text-align: left">
                <p class="title">{{$t('footer.questions')}}</p>
                <ul class="link-wrap">
                    <li>
                        <a href="">常见问题1</a>
                    </li>
                    <li>
                        <a href="">常见问题2</a>
                    </li>
                    <li>
                        <a href="">常见问题3</a>
                    </li>
                </ul>
            </el-col>

            <el-col :span="8" style="text-align: left">
                <p class="title">{{$t('footer.knight')}}</p>
                <el-row  class="code-wrap" :gutter="30" type="flex" justify="space-between">
                    <el-col :span="12">
                        <p>小程序</p>
                        <img src="@/assets/images/code.png" alt="">
                    </el-col>
                    <el-col :span="12">
                        <p>安卓应用</p>
                        <img src="@/assets/images/code.png" alt="">
                    </el-col>
                </el-row>
            </el-col>

            <el-col :span="4" style="text-align: right">
                <el-row type="flex" justify="space-between">
                    <el-col :span="10">
                        <div class="lang">{{$t('footer.lang')}}</div>
                    </el-col>
                    <el-col :span="14">
                        <el-select
                            v-model="selectValue"
                            size="small"
                            @change="langChange"
                            placeholder="请选择"
                        >
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </el-col>
                </el-row>
            </el-col>

        </el-row>
    </div>
</template>

<script>
	export default {
		data() {
			return {
				selectValue: '',
				options: [
					{
						value: "cn",
						label: "中文"
					},
					{
						value: "en",
						label: "English"
					}
				]
            }
        },
        methods: {
            langChange(e) {
                localStorage.setItem("lang", e);
                this.$i18n.locale = e;
            }
        },
		created() {
			this.selectValue = localStorage.lang == undefined ? "cn" : localStorage.lang;
		}
	}
</script>
