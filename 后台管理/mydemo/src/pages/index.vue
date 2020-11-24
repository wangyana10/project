<template>
 <div>
<el-container>
  <el-header >
    <h1>后台管理系统</h1>
     <div v-if="getUserInfo" class="userInfo">
        欢迎  {{getUserInfo.username}} 登录本系统
          <el-button @click="logout" type='danger' size='small'>退出</el-button>
        </div>
  </el-header>
  <el-container>
    <el-aside width="200px">
       <v-Nav></v-Nav>
    </el-aside>
    <el-main>
        <!-- 二级路由出口 -->
        <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
 </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import vNav from '../components/nav'
export default {
 data() {
 return {

 };
 },
 computed: {
    ...mapGetters(["getUserInfo"])
  },
 components:{
     vNav
 },
  methods: {
    ...mapActions(['changeUserInfoAction']),
    //logout退出事件
    logout(){
      this.changeUserInfoAction(null)
      //退出之后强制跳转登录页
      this.$router.push('/login')
    }
  },
};
</script>

<style lang="stylus" scoped>
@import '../stylus/index'
.el-header 
    background-color $thirdBgColor
    h1
      font-size 30px
      line-height 25px
      color blue
      margin-top 10px
     
    .userInfo
      float right
      font-size 16px
      line-height 16px
      color #666666
      margin-top -25px
      .el-button
        margin-top 10px
        background-color green

</style>
