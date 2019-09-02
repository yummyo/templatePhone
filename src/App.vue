<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta && $route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta || !$route.meta.keepAlive" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/close.less';
#app,
textarea,
input {
  height: 100%;
  color: #333;
}
#app {
  background: #ddd;
}
</style>
