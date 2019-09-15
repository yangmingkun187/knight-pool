<template>
    <el-container>
      <!-- 页头 -->
      <el-header height="50px">
        <Header />
      </el-header>

      <el-main>
        <router-view />
      </el-main>

      <!-- 页脚 -->
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
</template>

<script>
// @ is an alias to /src
import Header from '@/views/layout/Header'
import Footer from '@/views/layout/Footer'

export default {
  name: 'home',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
  .el-header {
    padding: 0 105px;
  }
  .el-main {
    padding: 0 105px;
  }
  .el-footer {
    position: fixed;
    min-height: 200px;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #F9F8F8;
    padding: 0 105px;
  }
</style>
