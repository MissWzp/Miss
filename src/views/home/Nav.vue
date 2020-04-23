<template>
    <div class="navlist">
    <van-grid :column-num="5">
      <van-grid-item v-for="(nav,index) in nav_list"
                     :key="nav.cid"
                     :icon="nav.icon_url"
                     :text="nav.name"
                     @click="gotoCategory(index)" />
    </van-grid>
  </div>
</template>


<script>
export default {
  name: 'navlist',
  props: {
    // 接受父组件传过来的数据
    nav_list: Array
  },
  data(){
      return{
          
      }
  },
  methods: {
    gotoCategory (index) {
      this.$router.push({ name: 'category', params: { currentIndex: index } })
    }
  }
}
</script>

<style scoped>

</style>