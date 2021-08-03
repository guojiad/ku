<template>
  <div id="app">
    <HeaderView class="header"></HeaderView>
    <!-- <HomeView class="home"></HomeView> -->
    <router-view class="home"></router-view>
    <FooterView class="footer"></FooterView>
  </div>
</template>

<script>
// 导入头部，主页，尾部组件
  import HeaderView from "./Header.vue"
  import HomeView from "./Home.vue"
  import FooterView from "./Footer.vue"
export default {
  components:{
    HeaderView,
    HomeView,
    FooterView
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
 @import url(./assets/css/app.css);
</style>ss
