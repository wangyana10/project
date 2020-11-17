<template>
  <div>
    <!-- 面包屑 -->
    <el-bread></el-bread>
    <!-- 添加按钮 -->
    <el-button type="primary" plain size="small" @click="isAdd">添加</el-button>
    <!-- 列表渲染 -->
    <v-Table @edit="edit"></v-Table>
    <!-- 弹框 -->
    <el-dialog ref="dialog" @cancel="cancel" :addInfo="addInfo"></el-dialog>
  </div>
</template>

<script>
import elBread from '../../components/el-bread'
import vTable from './list'
import elDialog from './add'
export default {
 data() {
 return {
     addInfo:{
        //  打开弹框
         isShow:false,
        //  区别添加或删除
        isAdd:true
     }

 };
 },
 components:{
     elBread,
     vTable,
     elDialog
 },
 methods: {
    //  打开弹框事件
     isAdd(){
        this.addInfo.isShow=true
     },
    //  cancel事件去改变弹框的属性
    cancel(e){
        this.addInfo.isShow=e;
    },
    //编辑事件
    edit(e){
      //e是表格传递的id
      console.log(e,'传递的id')
      //打开弹框
      this.addInfo.isShow=true 
      //告诉弹框你是一个编辑
      this.addInfo.isAdd =false
      //获取弹框的函数
      this.$refs.dialog.look(e)
    }
 }
};
</script>

<style lang="" scoped></style>
