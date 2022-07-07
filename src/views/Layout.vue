<template>
    <AppTopnav/>
    <AppHeader/>
    <main class="app-body">
        <!-- 二级路由 -->
        <router-view></router-view>
    </main>
    <AppFooter/>
</template>

<script>
import AppTopnav from '@/components/app-topnav'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import { useStore } from 'vuex'
export default {
  name: 'xtx-layout',
  components: { AppTopnav, AppHeader, AppFooter },
  // 获取下分类数据
  setup () {
    const store = useStore()
    store.dispatch('category/getCategory')
  }
}
</script>

<style scoped lang='less'>
.app-body {
  min-height: 600px;
}
</style>
