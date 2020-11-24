<template>
  <div>
    <div class="page">
      <div class="header">
        <em @click="$router.back()"></em>
        <h3>购物车</h3>
        <p class="memu">
          <span class="one"></span>
          <span class="one"></span>
          <span class="one"></span>
        </p>
      </div>
      <!-- main -->
      <div v-if="shopcarList.length > 0 && userInfo">
        <div class="carInfo" v-for="(item) in shopcarList" :key="item.id">
          <van-checkbox @change="checkOne" v-model="item.val"></van-checkbox>
          <van-swipe-cell>
            <van-card
              :num="item.num"
              :price="item.price.toFixed(2)"
              desc="描述信息"
              :title="item.goodsname"
              class="goods-card"
              :thumb="
                item.img
                  ? $imgUrl + item.img
                  : 'https://img.yzcdn.cn/vant/cat.jpeg'
              "
            >
              <template #footer>
                <div>
                  <van-stepper
                    v-model="goodsnum"
                    theme="round"
                    button-size="22"
                    disable-input
                  />
                </div>
              </template>
            </van-card>
            <template #right>
              <van-button
                @click="cardel(item.id)"
                square
                text="删除"
                type="danger"
                class="delete-button"
              />
            </template>
          </van-swipe-cell>
          <van-submit-bar :price="3050" button-text="提交订单">
            <van-checkbox v-model="allCheck" @change="checkAll"
              >全选</van-checkbox
            >
            <template #tip>
              你的收货地址不支持同城送,
              <span>修改地址</span>
            </template>
          </van-submit-bar>
        </div>
      </div>

      <div v-else-if="shopcarList.length == 0 && userInfo">
        <van-empty description="空空如也，快去shopping" />
      </div>

      <div v-else>
        <van-button type="info" @click="$router.push('/login')">
          未登录，去登录===
        </van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getCartList, getCartDelete } from "../../util/axios";
import "../../assets/css/car.css";
import { Toast } from "vant";
export default {
  data() {
    return {
      allCheck: false,
      shopcarList: [],
      goodsnum: 1,
      userInfo: "",
      checked: false,
    };
  },
  mounted() {
    this.cartListInfo();
    this.userInfo = sessionStorage.getItem("userInfo")
      ? JSON.parse(sessionStorage.getItem("userInfo"))
      : "";
  },
  methods: {
    // checkAll() {
    //   this.shopcarList.map((item) => {
    //     this.checked = this.allCheck;
    //   });
    // },
    // 全选
    checkAll() {
      this.shopcarList.map((item) => (item.val = this.allCheck));
    },

    checkOne() {
      this.allCheck = this.shopcarList.every((item) => item.val);
    },
    cartListInfo() {
      getCartList({
        uid: this.$route.query.id,
      }).then((res) => {
        // console.log(res);
        if (res.code == 200) {
          console.log(res);
          if (res.list == null) {
            this.shopcarList.length = 0;
          } else {
            this.shopcarList = res.list;
          }
        }
      });
    },
    cardel(id) {
      getCartDelete({
        id,
      }).then((res) => {
        // console.log(res);
        if (res.code == 200) {
          this.shopcarList = res.list;
          Toast.success(res.msg);
        }
      });
    },
  },
};
</script>

<style lang="" scoped>
.goods-card {
  margin: 0;
  background-color: #fff;
}

.delete-button {
  height: 100%;
}
.carInfo {
  display: flex;
}
.van-swipe-cell {
  flex: 1;
}
.van-checkbox {
  padding-left: 15px;
  width: 20px;
}
.submit {
  margin-top: -200px;
}
</style>
