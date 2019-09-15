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
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
</template>

<script>
// @ is an alias to /src
import Header from '@/views/layout/header/header'
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

</style>
