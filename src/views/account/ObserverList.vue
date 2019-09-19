<template>
    <div class="second-level-list">

        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/accountList' }">子账号列表</el-breadcrumb-item>
            <el-breadcrumb-item>设置观察者链接</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="list-warp">
            <div class="list-wrap-top">
                <el-row :gutter="24" align="middle">
                    <el-col :span="20">
                        <p class="title">观察者列表</p>
                    </el-col>
                    <el-col :span="4">
                        <el-button type="primary">创建新的观察者</el-button>
                    </el-col>
                </el-row>
            </div>

            <div class="table-warp">
                <el-table stripe>
                    <el-table-column
                        prop="date"
                        label="观察者名称">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="备注说明">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="链接地址">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="状态">
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

	}
</script>

