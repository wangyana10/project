<template>
  <div>
  
   
    <van-tabbar v-model="active">
      <van-tabbar-item to="/home">
        <span>首页</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/car">购物车</van-tabbar-item>
      <van-tabbar-item icon="comment-o" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      icon: {
        active: "https://img.yzcdn.cn/vant/user-active.png",
        inactive: "https://img.yzcdn.cn/vant/user-inactive.png",
      },
    };
  },
};
</script>

<style lang="" scoped>
</style>
