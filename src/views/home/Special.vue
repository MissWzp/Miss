<template>
    <div class="specialzone">
    <div class="titleWrapper">
      <div class="title">特色专区</div>
    </div>
    <!-- 新品尝鲜 -->
    <div class="wrapperItem">
      <div class="newItem"
           v-for="newItem in specialZone.newItemList"
           :key="newItem.id">
        <span class="
           itemTitle">{{newItem.title}}</span>
        <p class="itemSubTitle">{{newItem.subtitle}}</p>
        <img class="itemImg"
             :src="newItem.imageOne"
             alt="">
        <img class="itemImg"
             :src="newItem.imageTwo"
             alt="">
      </div>

      <!-- 九月热卖 -->
      <div class="hotItem"
           v-for="hotItem in specialZone.hotItemList"
           :key="hotItem.id">
        <span class="itemTitle hotItemTitle">{{hotItem.title}}</span>
        <p class="itemSubTitle">{{hotItem.subtitle}}</p>
        <img class="itemImg"
             :src="hotItem.imageOne"
             alt="">
        <img class="itemImg"
             :src="hotItem.imageTwo"
             alt="">
      </div>

      <!-- VIP专享 -->
      <div class="vipItem"
           v-for="vipItem in specialZone.vipItemList"
           :key="vipItem.id">
        <span class="itemTitle vipItemTitle">{{vipItem.title}}</span>
        <p class="itemSubTitle">{{vipItem.subtitle}}</p>
        <img class="itemImg"
             :src="vipItem.imageOne"
             alt="">
        <img class="itemImg"
             :src="vipItem.imageTwo"
             alt="">
      </div>

      <!-- 其他列表 -->
      <div class="otherItem"
           v-for="otherItem in specialZone.otherItemList"
           :key="otherItem.id">
        <p class="otherTitle">{{otherItem.title}}</p>
        <p class="otherSubTitle">{{otherItem.subtitle}}</p>
        <img class="otherImage"
             src="../../images/special/peanut.jpeg"
             alt="">
      </div>

      <!-- 平价菜场 -->
      <div class="lowPrice"
           v-for="lowPriceItem in specialZone.lowPriceItemList"
           :key="lowPriceItem.id">
        <p class="otherTitle">{{lowPriceItem.title}}</p>
        <p class="otherSubTitle">{{lowPriceItem.subtitle}}</p>
        <img class="otherImage"
             :src="lowPriceItem.image"
             alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'specialzone',
    props:{
        specialZone: Object
    },
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.specialZone {
  margin-top: 0.625rem;
  padding: 1.25rem 0 0.9375rem 0;
  background-color: white;
  
}
.titleWrapper {
  margin: 0 0.625rem 0.625rem 0.625rem;
  height: 1.5625rem;
}
.title {
  display: inline-block;
  border-left: 4px #3cb963 solid;
  padding-left: 0.3125rem;
  height: 1.3125rem;
  line-height: 1.3125rem;
  vertical-align: middle;
  font-size: 1.1875rem;
}

.wrapperItem {
  width: 95%;
  height: 13rem;
  border: 0.01rem solid #dddbc0;
  margin-left: 2.5%;
}
.wrapperItem .newItem {
  float: left;
  width: 49.9%;
  height: 6.5rem;
  border-right: 0.01rem solid #dddbc0;
  border-bottom: 0.01rem solid #dddbc0;
}
.itemTitle {
  width: 100%;
  font-size: 0.625rem;
  background-image: linear-gradient(135deg, red, orange);
  background-clip: text;
  color: transparent;
  padding-left: 0.5rem;
  padding-top: 0.5rem;
}

.itemSubTitle {
  font-size: 0.45rem;
  color: grey;
  padding-left: 0.5rem;
  padding-top: 0.3rem;
}
.hotItem {
  float: left;
  width: 49.9%;
  height: 6.5rem;
  border-bottom: 0.01rem solid #dddbc0;
}
.hotItemTitle {
  background-image: linear-gradient(150deg, #b2233f, #f70d3c);
  background-clip: text;
  color: transparent;
}
.vipItem {
  float: left;
  width: 45%;
  height: 6.5rem;
  border-right: 0.01rem solid #dddbc0;
}
.vipItemTitle {
  background-image: linear-gradient(150deg, #0e9e09, #51b14d);
  background-clip: text;
  color: transparent;
}
.itemImg {
  padding: 0.3rem 0.5rem 0rem 0.7rem;
  width: 3rem;
  height: 2.5rem;
}
.otherItem {
  float: left;
  width: 25%;
  border-right: 0.01rem solid #dddbc0;
  height: 6.5rem;
}

.otherTitle {
  font-size: 0.625rem;
  color: black;
  padding-left: 0.5rem;
  padding-top: 0.5rem;
}

.otherSubTitle {
  font-size: 0.45rem;
  color: grey;
  padding-left: 0.5rem;
  padding-top: 0.3rem;
}

.otherImage {
  width: 2.5rem;
  height: 2.5rem;
  padding-left: 1rem;
  border-radius: 50%;
}
.lowPrice {
  float: left;
  width: 24.5%;
  height: 6.5rem;
}
</style>