<template>
  <div>
    <div class="page">
      <header class="headCon">
        <a href="#" class="back" @click="$router.back()"
          ><img src="../../assets/images/arrowLeft2.jpg" alt=""
        /></a>
        <h2>注册</h2>
        <div class="menu">
          <h2 @click="$router.push('/login')">登录</h2>
        </div>
      </header>
       <van-form @submit="register">
      <van-field
        v-model="regInfo.phone"
        name="手机号"
        label="手机号"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="regInfo.nickname"
        name="昵称"
        label="昵称"
        placeholder="请输入昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />
      <van-field
        v-model="regInfo.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          注册
        </van-button>
      </div>
    </van-form>
    </div>
  </div>
</template>

<script>
import "../../assets/css/register.css";
import {getRegister} from '../../util/axios'
import {Toast} from 'vant'
export default {
  data() {
    return {
        regInfo:{
            phone:'',
            nickname:'',
            password:''
        }
    };
  },
  methods: {
      //封装一个注册事件
      register(){
          getRegister(this.regInfo)
          .then(res=>{
              if(res.code==200){
                  Toast.success(res.msg)
                  //成功之后跳转到登录页
                  this.$router.push('/login')
              }else{
                    Toast.fail(res.msg)
              }
          })
      }
  },
};
</script>

<style lang="" scoped>
</style>
