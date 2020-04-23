<template>
  <div class="botnav">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to='/category'>分类</van-tabbar-item>
      <van-tabbar-item icon="browsing-history-o" to="/eat">推荐</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o" to='/mine'>我的</van-tabbar-item>  
    </van-tabbar>
    
  </div>
</template>

<script>
export default {
  name: 'botnav',
  data(){
      return{
          active: 0
      }
  }
}
</script>

<style>

</style>
