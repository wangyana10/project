<template>
  <div>
    <div class="page">
      <div class="header">
        <em @click="$router.back()"></em>
        <h3>商品详情</h3>
        <p class="memu">
          <span class="one"></span>
          <span class="one"></span>
          <span class="one"></span>
        </p>
      </div>
      <!-- pian -->
      <div class="main" v-if="goodsInfo">
        <div class="pian">
          <img
            class="goodsimg"
            :src="
              goodsInfo.img
                ? $imgUrl + goodsInfo.img
                : 'https://image.baidu.com/search/detail?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=%E6%B2%A1%E6%9C%89%E6%89%BE%E5%88%B0&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&hd=&latest=&copyright=&cs=1714342114,3213016113&os=2240693095,3487907138&simid=0,0&pn=0&rn=1&di=153010&ln=1137&fr=&fmq=1605956761501_R&ic=&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fi1.sinaimg.cn%2Fty%2F2014%2F0513%2FU10623P6DT20140513174529.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined'
            "
            alt=""
          />
        </div>
        <div class="ya">
          <h5>{{ goodsInfo.goodsname }}</h5>
          <p>
            <span>￥:{{ goodsInfo.price.toFixed(2) }}</span>
            (此价格不与套装优惠同时享受)
          </p>
        </div>
        <div class="topd">
          <div class="chu">
            <p>促销：<span>满减</span>满2件9折；3件8折</p>
            <em></em>
          </div>
          <div class="num">
            <p>购买数量</p>
            <van-stepper
              v-model="value"
              theme="round"
              button-size="22"
              disable-input
            />
          </div>
          <div class="cad">
            <p>商品属性</p>
            <span>{{ goodsInfo.specsname }}:</span>
            <van-tag v-for="item in specsAttr" :key="item" type="success">{{
              item
            }}</van-tag>
          </div>
          <div class="qing">
            <p>商品详情</p>
            <p v-html="goodsInfo.description"></p>
          </div>
        </div>
      </div>
    </div>
    <!-- 商品导航 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-button
        @click="goCart"
        type="warning"
        text="加入购物车"
      />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import "../../assets/css/detail.css";
import { getGoodsInfo, getCartAdd } from "../../util/axios";
import { Toast } from "vant";
export default {
  data() {
    return {
      goodsInfo: "",
      value: 1,
      specsAttr: [],
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      getGoodsInfo({
        id: this.$route.query.id,
      }).then((res) => {
        // console.log(res, 111);
        if (res.code == 200) {
          this.goodsInfo = res.list[0];
          this.specsAttr = this.goodsInfo.specsattr
            ? this.goodsInfo.specsattr.split(",")
            : [];
        }
      });
    },
    goCart() {
      if (sessionStorage.getItem("userInfo")) {
        //已登录 调取加入购物车接口，并跳转到购物车列表
        getCartAdd({
          uid: JSON.parse(sessionStorage.getItem("userInfo")).uid,
          goodsid: this.goodsInfo.id,
          num: this.value,
        }).then((res) => {
          Toast.success(res.msg);
          this.$router.push({
            path: "/car",
            query: {
              id: JSON.parse(sessionStorage.getItem("userInfo")).uid,
            },
          });
        });
      } else {
        Toast.fail("当前为登录，请先登录");
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style lang="" scoped>
.goodsimg {
  width: 100%;
  height: 100%;
}
</style>
