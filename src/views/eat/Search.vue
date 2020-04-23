
<template>
  <div id="search">
    <div class="searchBox"
         @click="clickSearch">
     
     <van-search v-model="value" placeholder="请输入搜索关键词" />
      
    </div>
    <div class="todayMenu">{{$t('eat.menu')}}</div>
  </div>
</template>

<script type="text/javascript">
import { Toast } from 'vant'
export default {
  data () {
    return {
        value: '',
    }
  },
  components: {

  },
  methods: {
    clickCollerction () {
      Toast({
        message: this.$t('common.unrealized'),
        duration: 800
      })
    },
    clickSearch () {
      Toast({
        message: this.$t('common.unrealized'),
        duration: 800
      })
    }
  }
}

</script>

<style lang="less" scoped>
#search {
  background: #fff;
  position: fixed;
  height: 2rem;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
  .todayMenu {
    padding-left: 0.4rem;
    height: 1.4rem;
    line-height: 1.4rem;
    border-left: 0.25rem solid #75a342;
    font-size: 0.6728;
    font-weight: 2000;
    background: #fff;
  }

</style>
