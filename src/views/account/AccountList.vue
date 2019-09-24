<template>
    <div class="account-list">
        <div>
            <el-row :gutter="24">
                <el-col :span="6">
                    <el-card class="list-card">
                        <p class="card-name">
                            实时算力
                            <el-tooltip
                                effect="dark"
                                content="Top Center 提示文字"
                                placement="top">
                                <i class="el-icon-info"></i>
                            </el-tooltip>
                        </p>
                        <p class="card-value">
                            34.1
                            <span>Th/s</span>
                        </p>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card class="list-card">
                        <p class="card-name">实时算力</p>
                        <p class="card-value">
                            34.1
                            <span>Th/s</span>
                        </p>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card class="list-card">
                        <p class="card-name">实时算力</p>
                        <p class="card-value">
                            34.1
                            <span>Th/s</span>
                        </p>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card class="list-card">
                        <p class="card-name">实时算力</p>
                        <p class="card-value">
                            34.1
                            <span>Th/s</span>
                        </p>
                    </el-card>
                </el-col>
            </el-row>
        </div>

        <div class="list-warp">
            <div class="list-wrap-top">
                <el-row :gutter="24" align="middle">
                    <el-col :span="12">
                        <p class="title">子账号列表</p>
                    </el-col>
                    <el-col :span="6">
                        <el-input
                            placeholder="请输入内容"
                            suffix-icon="el-icon-search">
                        </el-input>
                    </el-col>
                    <el-col :span="3">
                        <el-button>默认按钮</el-button>
                    </el-col>
                    <el-col :span="3">
                        <el-button type="primary">主要按钮</el-button>
                    </el-col>
                </el-row>

            </div>

            <div class="table-warp">
                <el-table stripe>
                    <el-table-column
                        prop="date"
                        label="子账号名称">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="实施算力">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="一小时算力">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="活跃矿机">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="失效矿机">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="操作">
                    </el-table-column>
                </el-table>
                <p class="tips">共400条记录 第1/80页</p>
            </div>

            <div style="text-align: right">
                <el-pagination
                    background
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="100"
                    layout="prev, pager, next, sizes, jumper"
                    :total="400">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'AccountList'
	}
</script>

