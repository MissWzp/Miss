<template>
  <div class="eatWrapper">
    <Search />
    <!-- 今日菜单 -->
    <TodayMenu></TodayMenu>
    <BotNav />
  </div>
</template>

<script type="text/javascript">

import TodayMenu from '../views/eat/TodayMenu'
import Search from '../views/eat/Search'
import BotNav from './BotNav'
export default {
  data () {
    return {

    }
  },
  components: {
    Search,TodayMenu,BotNav
  }
}
</script>

<style lang="less" scoped>
.eatWrapper {
  background-color: "#f5f5f5";
}
.todayMenuWrapper{
  margin-top: 5rem;
}
</style>
