<template>
  <div class="home">
    <el-container>
      <!-- 页头 -->
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
    <!-- 页脚 -->
    <el-footer>
      <Footer />
    </el-footer>
  </div>
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
