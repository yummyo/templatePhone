<template>
  <div class="header">
    <div class="menuBtn" @click="$emit('showMenuList')">
      <img class :src="'./static/img/menu.png'" alt />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.header {
  position: fixed;
  top: 1rem;
  right: 1rem;

  .menuBtn {
    border: 1px solid #ddd;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    cursor: pointer;

    img {
      width: 2rem;
    }
  }
}
</style>