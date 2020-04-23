<template>
  <div class="home">
    <!-- 地址定位 -->
    <Header />

    <!-- 轮播 -->
    <Swipe :sowing_list="sowing_list" />

    <!-- 九宫格 -->
    <Nav :nav_list="nav_list" />

    <!-- 专区 -->
    <Special :specialZone="specialZone" />

    <!-- 首页商品 -->
    <TabbarGoodsItem
      :tabbar_all_product_list="tabbar_all_product_list"
      :flash_sale_product_list="flash_sale_product_list"
    />
    <!-- 底部提示 -->
    <div class="buttomtip">
    <van-divider>没有更多内容了</van-divider>
    </div>
    <!-- 底部导航栏 -->
    <BotNav />
  </div>
</template>

<script>
import { getHomeData } from "./../server/api/index";
import Header from "../views/home/Header";
import Swipe from "../views/home/Swipe";
import Nav from "../views/home/Nav";
import Special from "../views/home/Special";
import TabbarGoodsItem from "../views/home/TabbarGoodsItem";
import BotNav from "../components/BotNav"

export default {
  name: "home",
  components: { Header,Swipe,Nav,Special,TabbarGoodsItem,BotNav },
  data() {
    return {
      search: "",
      sowing_list: [], // 首页轮播图数据
      nav_list: [],
      flash_sale_product_list: [],
      tabbar_all_product_list: [],
      specialZone: {}, // 特色专区数据
      home_ad: "",
      active: 0
    };
  },
  created() {
    this._initData();
  },
  methods: {
    async _initData() {
      const res = await getHomeData();
      if (res.code === 0) {
        const data = res.data;
        // 给轮播组件 sowing_list赋值
        this.sowing_list = data.list[0].icon_list;
        // navList 赋值
        this.nav_list = data.list[2].icon_list;
        // 给限时抢购赋值
        this.flash_sale_product_list = data.list[3].product_list;
        // 给Tabbar 商品列表赋值
        this.tabbar_all_product_list = data.list[12].product_list;
        // 给特色专区赋值
        this.specialZone = data.special_zone;
        // 获取首页广告图
        this.home_ad = data.home_ad.image_url;
      }
    }
  }
};
</script>

<style >
.swipe {
  margin-top: 2.5rem;
}
</style>