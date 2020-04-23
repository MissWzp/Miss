<template>
    <div class="swipe">
      <!-- 轮播 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(image,index) in sowing_list" :key="index">
          <div style="overflow: hidden;width: 100%">
            <img :src="image.icon_url" style="width: 100%;" />
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
</template>

<script>
export default {
  name: 'swipe',
  props: {
    // 接受父组件传过来的数据
    sowing_list: Array
  },
  data(){
      return{
          
      }
  }
}
</script>

<style>


</style>
