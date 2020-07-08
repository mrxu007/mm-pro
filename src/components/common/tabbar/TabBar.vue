<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  components: {
  },
};
</script>

<style scoped>
.tab-bar {
  /* background: pink; */
  display: flex;
  position: fixed;
  bottom: 0;
  left: 50%;
  right: 0;
  transform: translateX(-50%);
  box-shadow: 0 -.02rem .02rem rgb(100, 100, 100, .4);
  width: 15rem;
  height: 2rem;
  text-align: center;
  font-size: .32rem;
}

</style>
