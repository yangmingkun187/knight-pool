<template>
    <div class="second-level-list">

        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/accountList' }">子账号列表</el-breadcrumb-item>
            <el-breadcrumb-item>已隐藏子账号列表</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="list-warp">
            <div class="list-wrap-top">
                <el-row :gutter="24" align="middle">
                    <el-col :span="12">
                        <p class="title">已隐藏账号列表</p>
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
                        label="实时算力">
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

	}
</script>

