<template>
 <div>
<el-container>
  <el-header >头部导航</el-header>
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
import vNav from '../components/nav'
export default {
 data() {
 return {

 };
 },
 components:{
     vNav
 }
};
</script>

<style lang="stylus" scoped>
@import '../stylus/index'
.el-header 
    background-color $thirdBgColor

</style>
