<template>
 <div>
 <!-- 导航菜单 -->
         <el-menu 
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#FF8000" unique-opened router>
        <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu :index="item.id.toString()" v-for="item in getUserInfo.menus" :key='item.id'>
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.title}}</span>
        </template>
         <el-menu-item :index="menu.url" v-for="menu in item.children" :key='menu.id'>
        <span slot="title">{{menu.title}}</span>
      </el-menu-item>
     
      </el-submenu>
    </el-menu>
 </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
 data() {
 return {
  defaultActive:'/home'
 };
 },
 mounted() {
  //  组件一加载就会触发挂载
   this.defaultActive=this.$route.path
  //  组件加载触发action
  // this.getMenuList({
     
  // })
 },
 computed: {
//    ...mapGetters({
// menuList:'menu/getMenuList'
  //  })
  // 用户登录的信息
  ...mapGetters(['getUserInfo'])
 },
 methods: {
  //  ...mapActions({
  //    getMenuList:'menu/getMenuListAction'
  //  })
 },
};
</script>

<style lang="stylus" scoped>
@import '../stylus/index'
.el-menu
    height 90vh
</style>
