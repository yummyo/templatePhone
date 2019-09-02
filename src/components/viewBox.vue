<template>
  <div class="viewBox">
    <!-- 页面总容器 -->
    <div v-for="(item,index) of nowPageData" :key="index" class="viewBox_c">
      <!-- 图片 -->
      <div v-if="item.type == 'img'" :class="item.type">
        <img :src="item.src" alt />
      </div>
      <div v-else-if="item.type == 'text'" :class="item.type">
        <div v-if="item.title" class="title">{{ item.title }}</div>
        <div v-if="item.subheading" class="subheading">{{ item.subheading }}</div>
        <div v-if="item.content" class="content">{{ item.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['nowMenu'],
  mounted() {
    console.log(this.pageData, this.nowPageData, this.nowMenu)
  },
  computed: {
    nowPageData() {
      return this.pageData[this.nowMenu]
    },
    ...mapGetters(['pageData'])
  }
}
</script>

<style lang="less" scoped>
.viewBox {
  padding: 0.5rem;
  .viewBox_c {
    .img {
      img {
        width: 100%;
      }
    }
    .text {
      .title {
        font-size: 1.5rem;
        font-weight: bold;
      }
      .subheading {
        font-size: 1.3rem;
      }
      .content {
        font-size: 0.8rem;
      }
    }
  }
}
</style>