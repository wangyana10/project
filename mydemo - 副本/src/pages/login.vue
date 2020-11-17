<template>
 <div class="login">
<el-form :model="loginForm" :rules="rules" ref="ruleForm" label-width="100px" class="loginForm">
  <el-form-item label="用户名" prop="username">
    <el-input v-model="loginForm.username" clearable></el-input>
  </el-form-item>
   <el-form-item label="密码" prop="password">
    <el-input v-model="loginForm.password" clearable show-password></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="login('ruleForm')">登录</el-button>
    
  </el-form-item>
</el-form>
 </div>
</template>

<script>
export default {
 data() {
 return {
//表单输入参
loginForm:{
    username:"",
    password:""
},
//规则验证
rules: {
    //登录名验证
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur' }
          ],
          //密码验证
           password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 18, message: '长度在 6 到 18个字符', trigger: 'blur' }
          ]
 }
 };
 },
 methods: {
     login(formName){
           this.$refs[formName].validate((valid) => {
          if (valid) {
            //调取登录接口
            if(this.loginForm.username=='admin'&&this.loginForm.password=='123456'){
                this.$message.success('登陆成功')
                this.$router.push('/index')
            }else{
                this.$message.error('用户名或密码不正确')
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
     }
 },
};
</script>

<style lang="" scoped>
.login{
width: 100vw;
height: 100vh;
background: #fff;
}
.login .loginForm{
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -150px 0 0 -150px;
    width: 400px;
    height: 220px;
    padding: 50px 20px;
    background-color: aquamarine;
}
</style>
