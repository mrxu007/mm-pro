<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-fill"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  components: {
  },
  props: {
    path: String,
    activeFont: {
      type: String,
      default: 'bold',
    },
  },
  data() {
    return {
      // isActive: false,
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { fontWeight: this.activeFont } : {};
    },
  },
  methods: {
    // 监听路由跳转
    itemClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  /* display: flex; */
}
.tab-bar-item img {
  width: .72rem;
  height: .72rem;
  margin-top: .2rem;
}
</style>
