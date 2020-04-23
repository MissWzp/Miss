
<template>
  <div class="wrapper"
       :style="showBgColor?'background-color: white;':''">
    <div class="locationWrapper"
         ref="location">
      <svg viewBox="0 0 30 30"
           class="icon iconLocation">
        <path fill="#FFFFFF"
              fill-rule="evenodd"
              d="M14.521 30.445c.817.738 2.142.75 2.958 0 0 0 11.521-9.82 11.521-17.158C29 5.95 23.18 0 16 0S3 5.949 3 13.287c0 7.339 11.521 17.158 11.521 17.158zM16 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"></path>
      </svg>
      <!-- 跳转到地图界面 -->
      <router-link to="/map"
                   tag="span"
                   class="address">{{location || $t('home.chooseLocation')}}</router-link>
      <svg-icon iconClass="up_real" />
    </div>
  </div>
</template>
<script type="text/javascript">
import PubSub from 'pubsub-js'
import { LOCATION_ADDRESS } from '../../config/pubsub_type'
import { getLocalStore } from '../../config/global'

export default {
  data () {
    return {
      showBgColor: false,
      location: getLocalStore('userLocation')
    }
  },
  mounted () {
    let that = this;
    that.$nextTick(() => {
      //监听滚动事件
      window.addEventListener('scroll', that.handleScroll)
    });
    PubSub.subscribe(LOCATION_ADDRESS, (msg, data) => {
      if (msg == LOCATION_ADDRESS) {
        this.location = data;
      }
    })
  },
  methods: {
    handleScroll () {
      let that = this;
      //垂直滚动的值兼容问题
      let scrollTopE = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let screenHeight = window.screen.availHeight
      if (scrollTopE > 168) {
        // 添加搜索栏颜色
        this.showBgColor = true;
      } else {
        this.showBgColor = false;
      }
    },
    // 到搜索界面
    goSearch () {
      // 引入 Toast 组件后，会自动在 Vue 的 prototype 上挂载 $toast 方法，便于在组件内调用。
      this.$toast({
        message: this.$t('common.unrealized'),
        duration: 800
      });
    }
  },
  beforeDestroy () {
    // 移除监听事件
    window.removeEventListener('scroll', this.handleScroll);
    // 移除通知时间
    PubSub.subscribe(LOCATION_ADDRESS);
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  height: 2.9rem;
  line-height: 2.9rem;
  width: 100%;
  box-sizing: border-box;
  border-top: solid 1px #eeeeee;
  color: white;
  display: flex;
}
.iconLocation {
  position: absolute;
  left: 0.3rem;
  top: 1.0625rem;
  width: 1.875rem;
  height: 1rem;
  vertical-align: middle;
}

.hidden {
  display: none;
}

// 地址框
.locationWrapper {
  margin-top: 0.6rem;
  height: 1.875rem;
  line-height: 1.875rem;
  width: 100%;
  opacity: 0.6;
  background-color: black;
  border-radius: 3.125rem;
  flex: 0, 0, 20rem;
}

.locationWrapper .address {
  padding-left: 1.7rem;
  display: inline-block;
  font-size: 0.8rem;
  overflow: hidden;
  width: 90%;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: middle;
}

.locationWrapper .iconArrow {
  vertical-align: middle;
}

.locationWrapper.wheel {
  opacity: 0;
  -webkit-transition: opacity 1.2s;
  transition: opacity 1.2s;
}

 span{
   text-align: center;
}

@media (min-width: 320px) {
  .searchWrapper {
    width: 55%;
  }
}

@media (min-width: 375px) {
  .searchWrapper {
    width: 57%;
  }
}

@media (min-width: 414px) {
  .searchWrapper {
    width: 62%;
  }
}

.icon {
  fill: #999;
  width: 1rem;
  height: 1rem;
}
</style>
