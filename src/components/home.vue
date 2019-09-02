<template>
  <!-- 主页 -->
  <div>
    <!-- 菜单 -->
    <gHeader @showMenuList="showMenuList"></gHeader>
    <!-- 登录注册 -->

    <!-- 内容 -->
    <view-box :nowMenu="nowMenu"></view-box>
    <!-- 菜单列表 -->
    <popup v-model="menuListVisible" position="right">
      <div style="width:200px;" class="menuBox">
        <div class="menuList">
          <div
            @click="menuChange(item)"
            class="menuList_item"
            :class="{active:nowMenu == item['key']}"
            v-for="(item,index) of menuList"
            :key="index"
          >{{ item['name'] }}</div>
        </div>
      </div>
    </popup>
  </div>
</template>

<script>
import gHeader from '@/common/views/gHeader.vue'
import viewBox from './viewBox'
export default {
  data() {
    return {
      menuListVisible: false,
      menuList: [
        { name: '主页', key: 'home' },
        { name: '产品', key: 'product' }
      ]
    }
  },
  computed: {
    nowMenu() {
      return this.$route.query.key || 'home'
    }
  },
  methods: {
    menuChange(data) {
      // 切换菜单
      this.$router.push({
        path: '/home',
        query: {
          key: data.key
        }
      })
    },
    showMenuList() {
      this.menuListVisible = true
    }
  },
  components: {
    gHeader,
    viewBox
  }
}
</script>

<style lang="less" scoped>
.menuBox {
  position: relative;
  height: 100%;
  .menuList {
    position: absolute;
    width: 100%;
    top: 30%;
    left: 0;
    transform: translate(0, -50%);
    text-align: center;
    font-size: 1.3rem;
    .menuList_item {
      padding: 0.5rem 0;
      cursor: pointer;
      &.active {
        background: #78edff;
        color: #fff;
      }
    }
  }
}
</style>