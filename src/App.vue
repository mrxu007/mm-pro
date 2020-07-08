<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item path="/home" >
        <img slot="item-icon" src="~assets/images/tabbar/shouye.svg" alt="">
        <img slot="item-icon-fill" src="~assets/images/tabbar/shouyefill.svg" alt="">
        <div slot="item-text">主页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="~assets/images/tabbar/sousuoleimu.svg" alt="">
        <img slot="item-icon-fill" src="~assets/images/tabbar/sousuoleimufill.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cartList">
        <img slot="item-icon" src="~assets/images/tabbar/gouwuche.svg" alt="">
        <img slot="item-icon-fill" src="~assets/images/tabbar/gouwuchefill.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="~assets/images/tabbar/wode.svg" alt="">
        <img slot="item-icon-fill" src="~assets/images/tabbar/wodefill.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue';
import TabBarItem from 'components/common/tabbar/TabBarItem.vue';

export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>

</style>
