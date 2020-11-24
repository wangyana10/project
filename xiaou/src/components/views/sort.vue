<template>
  <div>
    <div class="page">
      <div class="header">
        <em  @click="$router.back()"></em>
        <h3>商品分类</h3>
        <p class="memu">
          <span class="one"></span>
          <span class="one"></span>
          <span class="one"></span>
        </p>
      </div>

      <div class="top">
        <van-sidebar v-model="activeKey" @change="onChange">
          <van-sidebar-item v-for="item in firstList" :key="item.id" :title="item.catename" />
        </van-sidebar>
        <!-- <div class="right">
          <div class="right1">
            <div class="ma">
              <h5>洗发类</h5>
              <p>更多<em></em></p>
            </div>
            <div class="conter">
              <a href="#"
                ><img src="../../assets/images/shopClassify_2.jpg" alt="pic" />
                <p>护亮泽洗发水</p>
              </a>
              <a href="#"
                ><img src="../../assets/images/shopClassify_2.jpg" alt="pic" />
                <p>护亮泽洗发水</p>
              </a>
              <a href="#"
                ><img src="../../assets/images/shopClassify_2.jpg" alt="pic" />
                <p>护亮泽洗发水</p>
              </a>
              <a href="#"
                ><img src="../../assets/images/shopClassify_2.jpg" alt="pic" />
                <p>护亮泽洗发水</p>
              </a>
              <a href="#"
                ><img src="../../assets/images/shopClassify_2.jpg" alt="pic" />
                <p>护亮泽洗发水</p>
              </a>
              <a href="#"
                ><img src="../../assets/images/shopClassify_2.jpg" alt="pic" />
                <p>护亮泽洗发水</p>
              </a>
            </div>
          </div>
          <div class="right1">
            <div class="ma">
              <h5>染发类</h5>
              <p>更多<em></em></p>
            </div>
            <div class="conter">
              <a href="#"
                ><img
                  class="xin"
                  src="../../assets/images/shop_2 (2).jpg"
                  alt="pic"
                />
                <p>护亮泽洗发水</p>
              </a>
              <a href="#"
                ><img
                  class="xin"
                  src="../../assets/images/shop_2 (2).jpg"
                  alt="pic"
                />
                <p>护亮泽洗发水</p>
              </a>
              <a href="#"
                ><img
                  class="xin"
                  src="../../assets/images/shop_2 (2).jpg"
                  alt="pic"
                />
                <p>护亮泽洗发水</p>
              </a>
            </div>
          </div>
        </div> -->
        <van-grid :border="false" :column-num="3">
        <van-grid-item :to="'/goodsList?id='+item.id" v-for='item in secondList' :key='item.id'>
          <van-image class="imgsec" :src="item.img ? $imgUrl+item.img :'https://img.yzcdn.cn/vant/apple-1.jpg'" />
          <span class="title">{{item.catename}}</span>
        </van-grid-item>
      </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
import "../../assets/css/classify.css";
import { getCateTree } from "../../util/axios";
// import { Notify } from "vant";
export default {
  data() {
    return {
      activeKey: 0,
      firstList: [],
      secondList: [],
    };
  },
  mounted(){
    this.getCateTreelist();
  },
  methods: {
    onChange(e) {
     this.secondList = this.firstList[e].children
    },
    getCateTreelist() {
      getCateTree().then((res) => {
        if (res.code == 200) {
          this.firstList = res.list;
          this.secondList = res.list[this.activeKey].children;
        }
      });
    },
  },
};
</script>

<style lang="" scoped>
.cateInfo{
display: flex;
}
.van-grid{
    flex:1
}
.title{
    font-size: 14px;
}
.imgsec{
  width: 50px;
  height: 50px;
}
</style>
