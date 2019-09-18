<template>
    <el-container>
        <!-- 页头 -->
        <el-header height="100px">
           <Header />
        </el-header>

        <el-main>
            <router-view />
        </el-main>

        <!-- 页脚 -->
        <el-footer height="386px">
            <Footer />
        </el-footer>
    </el-container>
</template>

<script>
// @ is an alias to /src
import Header from '@/views/layout/AppHeader/AppHeader'
import Footer from '@/views/layout/AppFooter/AppFooter'

export default {
    name: 'home',
    components: {
        Header,
        Footer
    }
}
</script>

