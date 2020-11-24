<template>
  <div>
    <div class="page">
      <div class="header">
        <em @click="$router.back()"></em>
        <h3>我的订单</h3>
        <p class="memu">
          <span class="one"></span>
          <span class="one"></span>
          <span class="one"></span>
        </p>
      </div>
      <div class="wrap" v-if="!userInfo">
        <div class="top">
          <van-image
            round
            width="2rem"
            height="2rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
        <div class="yue">
          <p>XXX</p>
          <van-button class="van-button" @click="$router.push('/login')" type="info"
            >未登录，请登录</van-button
          >
        </div>

        <div class="day">
          <div class="day1">
            <a href="#">每日签到</a>
          </div>
        </div>
      </div>
      <div class="wrap" v-else>
        <div class="top">
          <van-image
            round
            width="2rem"
            height="2rem"
            src=""
          />
        </div>
        <div class="yue">
          <p>{{userInfo.nickname}}</p>
          <van-button class="van-button" @click="quit" type="info"
            >退出登录</van-button
          >
        </div>

        <div class="day">
          <div class="day1">
            <a href="#">每日签到</a>
          </div>
        </div>
      </div>
      <div class="dong">
        <div class="one">
          <img src="../../assets/images/iconMine_1.jpg" alt="jpg" />
          <p>全部订单</p>
        </div>
        <div class="one">
          <img src="../../assets/images/iconMine_2.jpg" alt="jpg" />
          <p>代付款</p>
        </div>
        <div class="one">
          <img src="../../assets/images/iconMine_3.jpg" alt="jpg" />
          <p>代收货</p>
        </div>
      </div>
      <div class="mon">
        <div class="abu">
          <div class="xin">
            <img src="../../assets/images/iconMine_4.jpg" alt="jpg" />
            <p>地址管理</p>
          </div>
          <div class="qi">
            <img src="../../assets/images/arrowRight.jpg" alt="jpg" />
          </div>
        </div>
        <div class="abu bu">
          <div class="xin">
            <img src="../../assets/images/iconMine_5.jpg" alt="jpg" />
            <p>我的钱包</p>
          </div>
          <div class="qi">
            <p class="da">200余额</p>
            <img src="../../assets/images/arrowRight.jpg" alt="jpg" />
          </div>
        </div>
        <div class="abu">
          <div class="xin">
            <img src="../../assets/images/iconMine_6.jpg" alt="jpg" />
            <p>我的优惠券</p>
          </div>
          <div class="qi">
            <img src="../../assets/images/arrowRight.jpg" alt="jpg" />
          </div>
        </div>
        <div class="abu">
          <div class="xin">
            <img src="../../assets/images/iconMine_7.jpg" alt="jpg" />
            <p>我的二维码</p>
          </div>
          <div class="qi">
            <img src="../../assets/images/arrowRight.jpg" alt="jpg" />
          </div>
        </div>
        <div class="abu">
          <div class="xin">
            <img src="../../assets/images/iconMine_8.jpg" alt="jpg" />
            <p>我的小伙伴</p>
            <p></p>
          </div>

          <div class="qi">
            <img src="../../assets/images/arrowRight.jpg" alt="jpg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../assets/css/my.css";
export default {
  data() {
    return {
      userInfo:''
    };
  }, 
  mounted(){
    this.userInfo=sessionStorage.getItem('userInfo')?
    JSON.parse(sessionStorage.getItem('userInfo')):''
  },
  methods:{
    quit(){
      sessionStorage.removeItem('userInfo')
      this.$router.push('/login')
    }
  }
};
</script>

<style lang="" scoped>
.van-button{
    margin-top: 10px;
  
}
.yue p{
  font-size: 20px;
  margin-top: 20px;
  color: white;
}
</style>
