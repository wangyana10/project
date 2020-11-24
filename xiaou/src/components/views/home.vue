<template>
  <div>
    <div class="page">
      <div class="headeri">
        <a class="logo" href="#">
          <img src="../../assets/images/logo.jpg" alt="#" />
        </a>
        <input class="search" type="search" placeholder="寻找商品" />
        <p class="memu">
          <span></span>
          <span></span>
          <span></span>
        </p>
      </div>
      <div class="nav">
        <ul class="clearfix">
          <router-link to="/list">
            <li v-for="item in listInfo" :key="item.id">
              <a href="#">{{ item.name }}</a>
            </li>
          </router-link>
        </ul>
        <p><em></em></p>
      </div>
      <!-- banner -->
      <van-swipe class="my-swipe" :autoplay="2000" indicator-color="blue">
        <van-swipe-item v-for="item in bannerList" :key="item.id">
          <img class="bannerimg" :src="$imgUrl + item.img" alt="" />
        </van-swipe-item>
      </van-swipe>
      <!-- 宫格 -->
      <van-grid :border="false" :column-num="4">
        <van-grid-item
          v-for="item in gonggeList"
          :key="item.id"
          class="imena"
          @click="tosort(item.id)"
        >
          <van-image :src="item.url" />
          <span class="gridTitle">{{ item.name }}</span>
        </van-grid-item>
      </van-grid>
      <!-- 限时抢购 -->
      <div class="limit">
        <div class="limTime">
          <h5><em></em>限时抢购</h5>
          <p>每天零点场 好货秒不停</p>
          <div class="yu">
            <span class="one">02</span>
            <span>:</span>
            <span class="one">16</span>
            <span>:</span>
            <span class="one">45</span>
            <span class="two">秒杀</span>
          </div>
          <div class="shop">
            <img src="../../assets/images/shop_5.jpg" alt="#" />
            <div class="price">&yen;14.8</div>
          </div>
        </div>
        <div class="quan">
          <div class="pig clearfix">
            <div class="text">
              <h4>品牌上新<span>折</span></h4>
              <p>每日9点 抢大牌</p>
              <em></em>
            </div>

            <a href="#">
              <img src="../../assets/images/shop_1.jpg" alt="#" />
            </a>
          </div>
          <div class="bottom clearfix">
            <div class="left">
              <h5>每日十件</h5>
              <p>只为你选好货</p>
              <a href="#">
                <img src="../../assets/images/indexship2.jpg" alt="#" />
              </a>
            </div>
            <div class="left bord0">
              <h5>拼啊</h5>
              <P> 超级好货拼团</P>
              <a href="#">
                <img src="../../assets/images/shop_2.jpg" alt="#" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- lin -->
      <div class="lin">
        <a href="#">
          <img src="../../assets/images/bar.jpg" alt="#" />
        </a>
      </div>
      <!-- 热门 -->
      <div class="topi">
        <div class="ren">
          <!-- tab标签页 -->
    <van-tabs type="card">
      <van-tab title="发现新品">
        <!-- 商品卡片 -->
        <van-card
          v-for="item in newsList"
          :key="item.id"
          num="2"
          price="2.00"
          desc="描述信息"
          :title="item.goodsname"
          :thumb="
            item.img
              ? $imgUrl + item.img
              : 'https://img.yzcdn.cn/vant/ipad.jpeg'
          "
        />
      </van-tab>
      <van-tab title="热门推荐">
        <!-- 商品卡片 -->
        <van-card
          v-for="item in hotsList"
          :key="item.id"
          num="2"
          price="2.00"
          desc="描述信息"
          :title="item.goodsname"
          :thumb="
            item.img
              ? $imgUrl + item.img
              : 'https://img.yzcdn.cn/vant/ipad.jpeg'
          "
        />
      </van-tab>
      <van-tab title="所有商品">
        <!-- 商品卡片 -->
        <van-card
          v-for="item in goodsList"
          :key="item.id"
          num="2"
          price="2.00"
          desc="描述信息"
          :title="item.goodsname"
          :thumb="
            item.img
              ? $imgUrl + item.img
              : 'https://img.yzcdn.cn/vant/ipad.jpeg'
          "
        />
      </van-tab>
    </van-tabs>
        </div>
       
      </div>
    </div>
  </div>
</template>


<script>
import "../../assets/css/index.css";
import { getBanner, getIndexGoods } from "../../util/axios";
//单独调用axios
import axios from "axios";
//调用轻提示
import { Toast } from "vant";
export default {
  data() {
    return {
      bannerList: [],
      newsList: [],
      hotsList: [],
      goodsList: [],
      gonggeList: [
        {
          id: 1,
          name: "限时抢购",
          url: require("../../assets/images/indexicon1.jpg"),
        },
        {
          id: 2,
          name: "积分商城",
          url: require("../../assets/images/indexicon2.jpg"),
        },
        {
          id: 3,
          name: "联系我们",
          url: require("../../assets/images/indexicon3.jpg"),
        },
        {
          id: 4,
          name: "商品分类",
          url: require("../../assets/images/indexicon4.jpg"),
        },
      ],
      proInfo: [
        {
          id: 1,
          src: require("../../assets/images/shop_4.jpg"),
          proname: "雅诗兰黛1号",
          propic: "10.00",
          pronum: "10",
        },
        {
          id: 2,
          src: require("../../assets/images/shop_4.jpg"),
          proname: "雅诗兰黛2号",
          propic: "20.00",
          pronum: "20",
        },
        {
          id: 3,
          src: require("../../assets/images/shop_4.jpg"),
          proname: "雅诗兰黛3号",
          propic: "30.00",
          pronum: "30",
        },
      ],
      listInfo: [
        {
          id: 1,
          name: "推荐",
        },
        {
          id: 2,
          name: "男装",
        },
        {
          id: 3,
          name: "童装",
        },
        {
          id: 4,
          name: "上衣",
        },
        {
          id: 5,
          name: "内衣装",
        },
        {
          id: 6,
          name: "男鞋",
        },
        {
          id: 7,
          name: "女鞋",
        },
        {
          id: 8,
          name: "运动",
        },
        {
          id: 9,
          name: "女装",
        },
      ],
    };
  },
  mounted() {
    //组件加载获取轮播图接口
    //组件加载获取商品信息
    /* 
    并发处理
    import axios from 'axios'
    axios.all([接口1，接口2...])
    .then(axios.spread((响应1,响应2)=>{

    }))
    */
    //并发处理
    axios.all([getBanner(), getIndexGoods()]).then(
      axios.spread((bannerList, indexGoods) => {
        if (bannerList.code == 200) {
          this.bannerList = bannerList.list;
          //   Toast.success(bannerList.msg);
        } else {
          Toast.fail(bannerList.msg);
        }
        if (indexGoods.code == 200) {
          this.newsList = indexGoods.list[0].content;
          this.hotsList = indexGoods.list[1].content;
          this.goodsList = indexGoods.list[2].content;
        } else {
          Toast.fail(indexGoods.msg);
        }
      })
    );
  },
  methods: {
    tosort(id) {
      this.$router.push({
        path: "/sort",
        query: {
          id,
        },
      });
    },
  },
};
</script>
<style lang="" scoped>
.bannerimg {
  width: 100%;
  /* 200px */
  height: 4rem;
}
</style>
