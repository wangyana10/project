<template>
  <div>
    <div class="page">
      <!-- header -->
      <div class="headerl">
        <a href="#" class="jiantou" @click="$router.back()"></a>
        <a class="logo" href="#">
          <img src="../../assets/images/logo.jpg" alt="#" />
        </a>
        <p class="memu">
          <span></span>
          <span></span>
          <span></span>
        </p>
      </div>
      <!-- 搜索 -->
      <div class="big">
        <input type="search" class="search" placeholder="🔍搜索商品" />
      </div>
      <!-- mainl -->
      <div class="mainl">
        <van-card
          v-for="item in goodsList"
          @click="goDetail(item.id)"
          :key="item.id"
          :price="item.price.toFixed(2)"
          desc="好用"
          :title="item.goodsname"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getGoods } from "../../util/axios";
import "../../assets/css/list.css";
export default {
  data() {
    return {
      goodsList: [],
    };
  },
  mounted() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      getGoods({
        fid: this.$route.query.id,
      }).then((res) => {
        if (res.code == 200) {
          this.goodsList = res.list;
        }
      });
    },
    goDetail(id) {
      this.$router.push({
          path:'/goodsDetail',
          query:{
              id
          }
      });
    },
  },
};
</script>

<style lang="" scoped>
</style>
