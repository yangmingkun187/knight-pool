<template>
    <div class="dashboard">

        <el-row :gutter="16" class="computing-power">
            <el-col :span="16">

                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>算力统计</span>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>

            </el-col>

            <el-col :span="8">

                <el-card class="box-card">

                    <div class="title">
                        当前算力
                    </div>

                    <div class="content">
                        <div>
                            <h5>实时算力</h5>
                            <p>
                                999.99 <span>EH/s</span>
                            </p>
                        </div>

                        <div>
                            <h5>1小时算力</h5>
                            <p>
                                999.99 <span>EH/s</span>
                            </p>
                        </div>
                    </div>

                    <div class="title">
                        当前矿力
                    </div>

                    <div class="content">
                        <div>
                            <h5>当前矿机</h5>
                            <p>
                                1100
                            </p>
                        </div>
                    </div>

                    <el-progress :text-inside="true"
                                 :stroke-width="24"
                                 :percentage="98" status="success">
                    </el-progress>

                </el-card>

            </el-col>
        </el-row>

        <el-row :gutter="16" class="btc-group">
            <el-col :span="6">

                <el-card class="box-card">
                    <h3>
                        今日已挖
                        <i class="el-icon-warning-outline"></i>
                    </h3>
                    <p class="blue">
                        0.00054120 <span>BTC</span>
                    </p>
                </el-card>

            </el-col>

            <el-col :span="6">

                <el-card class="box-card">
                    <h3>
                        总收益
                        <i class="el-icon-warning-outline"></i>
                    </h3>
                    <p>
                        1.24566 <span>BTC</span>
                    </p>
                </el-card>

            </el-col>
            <el-col :span="6">

                <el-card class="box-card">
                    <h3>
                        已支付
                        <i class="el-icon-warning-outline"></i>
                    </h3>
                    <p>
                        1.24566 <span>BTC</span>
                    </p>
                </el-card>

            </el-col>
            <el-col :span="6">

                <el-card class="box-card">
                    <h3>
                        余额
                        <i class="el-icon-warning-outline"></i>
                    </h3>
                    <p>
                        12332432.736489292921 <span>BTC</span>
                    </p>
                </el-card>

            </el-col>

        </el-row>

    </div>
</template>

<script>
	export default {
		props: {},
	};
</script>
